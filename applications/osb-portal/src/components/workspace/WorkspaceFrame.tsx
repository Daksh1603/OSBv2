import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";
import { Workspace, WorkspaceResource, OSBApplications, ResourceStatus } from '../../types/workspace';
import { UserInfo } from '../../types/user';
import WorkspaceResourceService from '../../service/WorkspaceResourceService';
import { getBaseDomain } from '../../utils';

const useStyles = makeStyles((theme) => ({
    iframe: {
        flex: 1,
    },
}));



export const WorkspaceFrame = (props: { user: UserInfo, workspace: Workspace, login: any }) => {
    const classes = useStyles();

    const { user, workspace } = props;
    if (!workspace) {
        return null;
    }

    const id = workspace.id;
    let timerId: any = null;

    const openResource = async (contentWindow: any, workspaceResource: WorkspaceResource) => {
        if (timerId !== null) {
            clearTimeout(timerId);
        }
        const resource = await WorkspaceResourceService.getResource(workspaceResource.id); // refresh the workspace resource from the db
        if (resource.status === ResourceStatus.available) {
            const fileName: string = "/opt/workspace/" + resource.folder + "/" + resource.location.slice(resource.location.lastIndexOf("/") + 1);
            const r = WorkspaceResourceService.workspacesControllerWorkspaceResourceOpen(resource.id).then(() => {
                const iFrame: HTMLIFrameElement = document.getElementById("workspace-frame") as HTMLIFrameElement;
                iFrame.contentWindow.postMessage(fileName, '*');
            }).catch(() => {
                console.error("Error opening resource, ResourceOpen function failed!");
            });
        } else {
            timerId = setTimeout(openResource, 5000, contentWindow, workspaceResource);
        }
    }

    const onloadIframe = (e: any) => {
        if ((workspace.resources != null) && (workspace.resources.length > 0)) {
            const workspaceResource: WorkspaceResource = workspace.lastOpen != null ? workspace.lastOpen : workspace.resources[0];
            openResource(e.target.contentWindow, workspaceResource);
        }
    }

    const domain = getBaseDomain()

    const userParam = (user == null) ? '' : `${user.id}`;
    const application = workspace.lastOpen.type.application.subdomain;
    const type = application.slice(0, 4);

    const frameUrl = `//${application}.${domain}/hub/spawn/${userParam}/${id}${type}`;
    document.cookie = `workspaceId=${id};path=/;domain=${domain}`;
    document.cookie = `workspaceOwner=${workspace.owner.keycloakId};path=/;domain=${domain}`;

    return (
        <iframe id="workspace-frame" frameBorder="0" src={frameUrl} className={classes.iframe} onLoad={onloadIframe} />
    )
}