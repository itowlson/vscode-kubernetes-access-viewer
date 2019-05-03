import * as vscode from 'vscode';

const EXTENSION_CONFIG_KEY = "vscode-k8saccessviewer";

const K8S_EXTENSION_CONFIG_KEY = "vs-kubernetes";
const KUBECONFIG_PATH_KEY = "vs-kubernetes.kubeconfig";

export function affectsExtensionConfiguration(change: vscode.ConfigurationChangeEvent) {
    return change.affectsConfiguration(EXTENSION_CONFIG_KEY);
}

export function rakkessPath(): string | undefined {
    return toolPath('rakkess');
}

export function whocanPath(): string | undefined {
    return toolPath('kubectl-who-can');
}

export function toolPath(tool: string): string | undefined {
    return vscode.workspace.getConfiguration(EXTENSION_CONFIG_KEY)[`${tool}-path`];
}

// If the core extension is using a different kubeconfig then we should too

export function getActiveKubeconfig(): string {
    return vscode.workspace.getConfiguration(K8S_EXTENSION_CONFIG_KEY)[KUBECONFIG_PATH_KEY];
}
