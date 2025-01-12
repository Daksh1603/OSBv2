import * as React from "react";

//components
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Dropzone from "react-dropzone";
import Chip from "@mui/material/Chip";
import Alert from '@mui/material/Alert';
import Autocomplete from "@mui/material/Autocomplete";
import MDEditor from "react-markdown-editor-lite";
import MarkdownViewer from "../common/MarkdownViewer";
import OSBDialog from "../common/OSBDialog";

//icons
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

// import style manually
import "react-markdown-editor-lite/lib/index.css";
import { alpha } from "@mui/material/styles";

//style
import styled from "@mui/system/styled";
import { bgLight, radius, gutter, bgInputs, bgDarkest } from "../../theme";

//types
import { Workspace } from "../../types/workspace";
import { UserInfo } from "../../types/user";
import { Tag } from "../../apiclient/workspaces";

//services
import WorkspaceService from "../../service/WorkspaceService";
import StyledLabel from "../styled/FormLabel";


export const StyledDropZoneBox = styled(Box)(({ theme }) => ({
  color: bgInputs,
  border: `2px dashed ${bgInputs}`,
  borderRadius: 5,
  padding: 4,
  "& .MuiTypography-subtitle2": {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  "& .MuiButton-outlined": {
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    color: bgInputs,
    borderRadius: radius,
    border: `2px solid ${bgInputs}`,
  },
}));


export const StyledImagePreviewSection = styled("section")(() => ({
  display: "flex",
  minHeight: "15em",
  alignItems: "stretch",
  backgroundPosition: "center",
  backgroundSize: "cover",
  flex: 1,
}));

const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  "& .MuiChip-root": {
    backgroundColor: bgLight,
  },
  "& .MuiInputBase-root": {
    backgroundColor: "transparent !important",
    paddingTop: "0 !important",

    "&:before": {
      border: "0 !important",
    },
  },
}));

interface WorkspaceEditProps {
  workspace: Workspace;
  onLoadWorkspace: (refresh?: boolean, workspace?: Workspace) => void;
  closeHandler?: () => void;
  filesSelected?: boolean;
  tags: Tag[];
  retrieveAllTags?: (page: number) => void;
  children?: any;
  title: string;
  open: boolean;
  user: UserInfo;
}

export const dropAreaStyle = (error: any) => ({
  flex: 1,
  display: "flex",
  alignItems: "center",

  borderRadius: radius,
  padding: gutter,
  borderColor: error ? "red" : alpha(bgInputs, 1),
});

async function readFile(file: Blob) {
  return new Promise((resolve, reject) => {
    const fileReader: FileReader = new FileReader();

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = reject;

    fileReader.readAsArrayBuffer(file);
  });
}

const MAX_ALLOWED_THUMBNAIL_SIZE = 1024 * 1024; // 1MB
let thumbnail: Blob;

export default (props: WorkspaceEditProps) => {
  const { workspace, user } = props;
  const [workspaceForm, setWorkspaceForm] = React.useState<Workspace>({
    ...props.workspace,
  });

  const closeWorkSpaceEditor = () => {
    if (props.closeHandler) {
      props.closeHandler();
    }
  };

  const [thumbnailPreview, setThumbnailPreview] = React.useState<any>(
    workspace?.thumbnail ? "/proxy/workspaces/" + workspace.thumbnail : null
  );
  const [thumbnailError, setThumbnailError] = React.useState<any>(null);
  const [showNoFilesSelectedDialog, setShowNoFilesSelectedDialog] =
    React.useState(false);
  const workspaceTags =
    workspace && workspace.tags
      ? workspace.tags.map((tagObject) => tagObject.tag)
      : [];
  const [defaultTags, setDefaultTags] = React.useState(workspaceTags);

  const [submitError, setSubmitError] = React.useState("");

  const handleCreateWorkspaceButtonClick = () => {
    if (typeof props.filesSelected !== "undefined") {
      props.filesSelected
        ? handleCreateWorkspace()
        : setShowNoFilesSelectedDialog(!showNoFilesSelectedDialog);
    } else {
      handleCreateWorkspace();
    }
  };

  const handleCreateWorkspace = async () => {
    setLoading(true);
    WorkspaceService.createOrUpdateWorkspace({
      ...workspace,
      ...workspaceForm,
    }).then(
      async (returnedWorkspace) => {
        props.retrieveAllTags(1);
        if (thumbnail && !thumbnailError) {
          const fileThumbnail: any = await readFile(thumbnail);
          WorkspaceService.updateWorkspaceThumbnail(
            returnedWorkspace.id,
            new Blob([fileThumbnail])
          ).then(
            () => props.onLoadWorkspace(true, returnedWorkspace),
            (e) => console.error("Error uploading thumbnail", e)
          );
        } else {
          console.log("else");
          setLoading(true);
          props.onLoadWorkspace(true, returnedWorkspace);
        }
      },
      (e) => {
        setLoading(false);
        if (e.status === 405) {
          setSubmitError("Workspaces quota exceeded. Try to delete some workspaces or see the documentation to know how to manage your quotas.");
        } else {
          setSubmitError("Unexpected error submitting the workspace. Please try again later.");
        }
        
        // console.error('Error submitting the workspace', e);
      }
    );
  };

  const previewFile = (file: Blob) => {
    if (!file) {
      setThumbnailError(null);
      setThumbnailPreview(null);
      return;
    }

    if (!file.type.includes("image")) {
      setThumbnailError("Not an image file");
      return;
    }
    if (file.size > MAX_ALLOWED_THUMBNAIL_SIZE) {
      setThumbnailError("File exceeds allowed size (1MB)");
      return;
    }

    setThumbnailError(null);

    const fileReader: FileReader = new FileReader();

    fileReader.onload = () => {
      setThumbnailPreview(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  const setNameField = (e: any) =>
    setWorkspaceForm({ ...workspaceForm, name: e.target.value });
  const setDescriptionField = (e: any) =>
    setWorkspaceForm({ ...workspaceForm, description: e.text });
  const setThumbnail = (uploadedThumbnail: any) => {
    thumbnail = uploadedThumbnail;
    previewFile(thumbnail);
  };
  const setWorkspaceTags = (tagsArray: string[]) => {
    const arrayOfTags: Tag[] = [];
    tagsArray.forEach((tag) => {
      arrayOfTags.push({ tag });
    });
    setWorkspaceForm({ ...workspaceForm, tags: arrayOfTags });
  };
  const setTypeField = (e: any) => {
    // publicable if 1
    // featured if 2
    setWorkspaceForm({
      ...workspaceForm,
      shareType: e.target.value,
      publicable: e.target.value >= 1,
      featured: e.target.value === 2,
    });
  };
  const [loading, setLoading] = React.useState(false);

  return (
    <>
      <OSBDialog
        title={props.title}
        open={props.open}
        closeAction={closeWorkSpaceEditor}
        maxWidth="md"
        actions={
          <React.Fragment>
            {submitError && <Alert severity="error">{submitError}</Alert>}
            <Button
              disabled={loading}
              color="primary"
              onClick={closeWorkSpaceEditor}
            >
              Cancel
            </Button>
            <Button
              id="create-a-new-workspace-button"
              variant="contained"
              color="primary"
              disabled={loading}
              onClick={handleCreateWorkspaceButtonClick}
              sx={{ marginLeft: "8px" }}
            >
              {workspace.id ? "Save" : "Create A New Workspace"}
            </Button>
          </React.Fragment>
        }
      >
        <Box>
          {props.children && <Box>{props.children}</Box>}
          <Box>
            <StyledLabel>
              Workspace name
            </StyledLabel>
            <TextField
              id="workspaceName"
              placeholder="Name"
              fullWidth={true}
              onChange={setNameField}
              variant="outlined"
              defaultValue={props.workspace.name}
            />
          </Box>

          <Box mt={4} alignItems="stretch">
            <StyledLabel>
              Workspace tags
            </StyledLabel>
            <StyledAutocomplete
              multiple={true}
              freeSolo={true}
              options={props.tags.map((tagObject) => tagObject.tag)}
              defaultValue={defaultTags}
              onChange={(event, value) => setWorkspaceTags(value)}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                    key={option}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  InputProps={{ disableUnderline: true }}
                  fullWidth={true}
                  {...params}
                  variant="filled"
                />
              )}
            />
          </Box>

          <Box mt={4}>
            <StyledLabel>
              Visibility
            </StyledLabel>
            <Select
              value={workspaceForm.shareType}
              onChange={setTypeField}
              fullWidth={true}
              variant="outlined"
            >
              <MenuItem value={0}>Private</MenuItem>
              <MenuItem value={1}>Public</MenuItem>
              {user.isAdmin && <MenuItem value={2}>Featured</MenuItem>}
            </Select>
          </Box>

          <Box mt={4}>
            <StyledLabel>
              Workspace description
            </StyledLabel>

            <MDEditor
              defaultValue={workspace?.description}
              onChange={setDescriptionField}
              view={{ html: false, menu: true, md: true }}
              renderHTML={(text: string) => <MarkdownViewer text={text} />}
            />
          </Box>
          <Box mt={4} alignItems="stretch">
            <StyledLabel>
              Workspace thumbnail
            </StyledLabel>
            <StyledDropZoneBox alignItems="stretch">
              <Dropzone
                onDrop={(acceptedFiles: any) => {
                  setThumbnail(acceptedFiles[0]);
                }}
              >
                {({
                  getRootProps,
                  getInputProps,
                  acceptedFiles,
                }: {
                  getRootProps: (p: any) => any;
                  getInputProps: () => any;
                  acceptedFiles: any[];
                }) => (
                  <StyledImagePreviewSection
                    style={{
                      backgroundImage:
                        !thumbnailError && `url(${thumbnailPreview})`,
                    }}
                  >
                    <div
                      {...getRootProps({
                        style: dropAreaStyle(thumbnailError),
                      })}
                    >
                      <input {...getInputProps()} />
                      <Grid
                        container={true}
                        justifyContent="center"
                        alignItems="center"
                        direction="row"
                      >
                        {thumbnail && (
                          <Grid item={true}>
                            {!thumbnail ? (
                              ""
                            ) : (
                              <IconButton
                                onClick={(e: any) => {
                                  e.preventDefault();
                                  setThumbnail(null);
                                }}
                                size="large"
                              >
                                <DeleteForeverIcon />
                              </IconButton>
                            )}
                          </Grid>
                        )}
                        <Grid item={true}>
                          <Box component="div" m={1}>
                            {!thumbnail ? (
                              <>
                                <span>Drop file here to upload...</span>
                                <Button
                                  variant="outlined"
                                  sx={{ margin: "auto !important" }}
                                >
                                  Browse files
                                </Button>
                              </>
                            ) : null}

                            {thumbnailError && (
                              <Typography
                                color="error"
                                variant="subtitle2"
                                component="p"
                              >
                                {thumbnailError}
                              </Typography>
                            )}
                          </Box>
                        </Grid>
                      </Grid>
                    </div>
                  </StyledImagePreviewSection>
                )}
              </Dropzone>
            </StyledDropZoneBox>
          </Box>
        </Box>
      </OSBDialog>
      {loading && (
        <Box mt={4} p={2} sx={{ backgroundColor: bgLight }} textAlign="right">
          <CircularProgress
            size={24}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: -12,
              marginLeft: -12,
            }}
          />
        </Box>
      )}
      {showNoFilesSelectedDialog && (
        <Dialog
          open={showNoFilesSelectedDialog}
          onClose={() => setShowNoFilesSelectedDialog(false)}
        >
          <DialogTitle>No files selected</DialogTitle>
          <DialogContent>
            {
              "No files from this repository have been selected, and so all the files in the repository will be added in the workspace. Press OK to proceed, or press Cancel and go back and select some."
            }
          </DialogContent>
          <DialogActions>

            <Button
              color="primary"
              onClick={() => setShowNoFilesSelectedDialog(false)}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleCreateWorkspace();
                setShowNoFilesSelectedDialog(false);
              }}
              disabled={loading}
            >
              OK
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};
