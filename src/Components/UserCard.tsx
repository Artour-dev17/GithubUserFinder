import type {User} from "../Types/user.ts";

type userCardProps ={
    user: User;
}
function UserCard( {user,}: userCardProps){
    return(
        <div>
            <img
                src={user.avatar_url}
                alt={user.login}
                width={150}
            />
            <h2>{user.login}</h2>
            <p>
                Repositories: {user.public_repos}
            </p>
            <p>
                Followers: {user.followers}
            </p>
            <p>
                Following: {user.following}
            </p>

            <a
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