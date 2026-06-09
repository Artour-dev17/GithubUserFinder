import type {User} from "../Types/user.ts";

type userCardProps ={
    user: User;
}
function UserCard( {user,}: userCardProps){
    return(
        <div className="user-card">
            <img
                className="user-avatar"
                src={user.avatar_url}
                alt={user.login}
                width={150}
            />
            <h2 className="user-name">{user.login}</h2>
            <div className="user-stats">
                <p>
                    Repositories: {user.public_repos}
                </p>
                <p>
                    Followers: {user.followers}
                </p>
                <p>
                    Following: {user.following}
                </p>
            </div>

            <a
                className="profile-link"
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
            >
                View Github Profile
            </a>

        </div>
    );
}

export default UserCard;