import { FeaturedType } from "./global";
import {
  ResourceType as ResourceTypeApi,
  ResourceOrigin,
  Tag,
  User,
} from "../apiclient/workspaces";
import { UserInfo } from "./user";

export interface OSBApplication {
  name: string;
  subdomain: string;
  code: string;
}

export enum ResourceStatus {
  pending = "PENDING",
  available = "AVAILABLE",
  error = "ERROR",
}

export interface WorkspaceResource {
  workspaceId?: number;
  id?: number;
  name: string;
  origin?: ResourceOrigin;
  folder?: string;
  type?: ResourceType;
  status?: ResourceStatus;
  timestampUpdated?: Date;
  timestampCreated?: Date;
  resourceType?: string;
}

export interface ResourceType {
  application: OSBApplication;
}

export const OSBApplications: { [id: string]: OSBApplication } = {
  jupyter: { name: "JupyterLab", subdomain: "notebooks", code: "jupyter" },
  nwbexplorer: { name: "NWB Explorer", subdomain: "nwbexplorer", code: "nwbexplorer" },
  netpyne: { name: "NetPyNE", subdomain: "netpyne", code: "netpyne" },
};

export const SampleResourceTypes = {
  [ResourceTypeApi.E.toString()]: {
    application: OSBApplications.nwbexplorer,
    name: "NWB File",
  },
  [ResourceTypeApi.M.toString()]: {
    application: OSBApplications.netpyne,
    name: "NetPyNE model",
  },
  [ResourceTypeApi.G.toString()]: {
    application: OSBApplications.jupyter,
    name: "Generic file",
  },
};

// Workspace object
export interface Workspace {
  lastOpen?: WorkspaceResource;
  resources?: WorkspaceResource[];
  shareType: FeaturedType;
  volume: string; // Volume id
  id?: number;
  name: string;
  description: string;
  user?: User;
  timestampCreated?: Date;
  timestampUpdated?: Date;
  thumbnail?: string;
  publicable?: boolean;
  featured?: boolean;
  license?: string;
  owner?: UserInfo;
  tags?: Tag[];
  [other: string]: any;
  defaultApplication?: OSBApplication
}
