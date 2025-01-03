export const Contributions = ({ data }) => {
    console.log(data); // Debug to inspect the input data structure

    return (
        <div className="space-y-2">
            {data.map((repo, index) => (
                <div
                    key={index}
                    className="flex flex-col gap-2 bg-white bg-opacity-10 p-2 rounded-lg"
                >
                    <h3 className="text-base font-bold">{repo.repo_name}</h3>

                    {/* Issues Section */}
                    <div>
                        <strong>Issues:</strong>
                        {Array.isArray(repo.contributions?.issues) &&
                        repo.contributions.issues.length > 0 ? (
                            repo.contributions.issues.map((issue, i) => (
                                <div key={i} className="ml-4">
                                    <a
                                        href={issue.html_url}
                                        className="text-blue-500 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {issue.title}
                                    </a>
                                    <p>State: {issue.state}</p>
                                    <p>
                                        Created:{" "}
                                        {new Date(issue.created_at).toLocaleDateString()}
                                    </p>
                                    <p>
                                        Updated:{" "}
                                        {new Date(issue.updated_at).toLocaleDateString()}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p className="ml-4 text-gray-500">
                                No issues found for this repository.
                            </p>
                        )}
                    </div>

                    {/* Pull Requests Section */}
                    <div>
                        <strong>Pulls:</strong>
                        {Array.isArray(repo.contributions?.pulls) &&
                        repo.contributions.pulls.length > 0 ? (
                            repo.contributions.pulls.map((pull, i) => (
                                <div key={i} className="ml-4">
                                    <a
                                        href={pull.html_url}
                                        className="text-blue-500 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {pull.title}
                                    </a>
                                    <p>State: {pull.state}</p>
                                    <p>
                                        Created:{" "}
                                        {new Date(pull.created_at).toLocaleDateString()}
                                    </p>
                                    <p>
                                        Updated:{" "}
                                        {new Date(pull.updated_at).toLocaleDateString()}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p className="ml-4 text-gray-500">
                                No pull requests found for this repository.
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};
