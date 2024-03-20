// Function to extract Pokemon ID from URL
export const getPokemonIdFromUrl = (url) => {
    const regex = /\/(\d+)\/$/;
    const match = url.match(regex);
    if (match) {
        let id = match[1];
        // Pad with zeros if necessary
        if (id.length === 1) {
            id = `00${id}`;
        } else if (id.length === 2) {
            id = `0${id}`;
        }
        return id;
    } else {
        return null;
    }
};

export function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
}

export function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}`.toUpperCase(),
    };
}