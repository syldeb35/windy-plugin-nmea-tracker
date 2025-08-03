// Plugin to handle Windy imports
export function windyImportsPlugin() {
    return {
        name: 'windy-imports',
        resolveId(id) {
            if (id.startsWith('@windy/')) {
                return { id, external: true };
            }
            return null;
        }
    };
}
