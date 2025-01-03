export const getTotalContributions = (data) => {
    let totalRepos = 0;
    let totalIssues = 0;
    let totalPulls = 0;

    data.forEach((repo) => {
        const { contributions } = repo;

        // Check if contributions exist
        if (contributions) {
            const issues = contributions.issues || [];
            const pulls = contributions.pulls || [];

            // Increment counts based on array lengths
            if (issues.length > 0 || pulls.length > 0) {
                totalRepos += 1; // Count the repository only if it has issues or pulls
            }
            totalIssues += issues.length; // Add total issues
            totalPulls += pulls.length;   // Add total pull requests
        }
    });

    return {
        totalRepos,
        totalIssues,
        totalPulls,
    };
};
