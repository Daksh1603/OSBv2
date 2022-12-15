import * as React from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { EditRepoDialog } from "../index";
import { canEditRepository } from "../../service/UserService";
import { UserInfo } from "../../types/user";
import { OSBRepository } from "../../apiclient/workspaces";

interface RepositoryActionsMenuProps {
  repository: OSBRepository;
  user?: UserInfo;
  onAction: (r: OSBRepository) => void;
}

export default (props: RepositoryActionsMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [repositoryEditorOpen, setRepositoryEditorOpen] = React.useState(false);

  const canEdit = canEditRepository(props.user, props.repository);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleEditRepository = () => {
    setRepositoryEditorOpen(true);
    handleCloseMenu();
  };

  const setDialogOpen = () => {
    setRepositoryEditorOpen(!repositoryEditorOpen);
  };

  const handleOnSubmit = (r: OSBRepository) => {
    props.onAction(r);
  };

  return (
    <>
      {canEdit && (
        <>
          <IconButton size="small" onClick={handleClick}>
            <MoreHorizIcon sx={{ fontSize: "1rem" }} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted={true}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            {canEdit && (
              <MenuItem onClick={handleEditRepository}>Edit</MenuItem>
            )}
          </Menu>
          {repositoryEditorOpen && (
            <EditRepoDialog
              user={props.user}
              title="Edit repository"
              dialogOpen={repositoryEditorOpen}
              setDialogOpen={setDialogOpen}
              onSubmit={handleOnSubmit}
              repository={props.repository}
            />
          )}
        </>
      )}
    </>
  );
};
