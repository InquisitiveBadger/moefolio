// Initialize the JavaScript environment
const newTitleScript = (tp) => {
    return async () => {
        const newTitle = await tp.system.prompt('Enter new title: ');
        await tp.file.rename(newTitle);
        return `# ${newTitle}`;
    };
};

// Execute the script
const result = await newTitleScript(tp)();
tR += result;
