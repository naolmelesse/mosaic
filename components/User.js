import { BiUser } from "react-icons/bi";
import { styled } from "styled-components";
import { useRouter } from "next/router";
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from "next/link";

export default function User(){
    const route = useRouter();
    const { user } = useUser();

    if(!user)
    return(
        <div onClick={() => route.push("/api/auth/login")}>
            <BiUser/>
            <p>Profile</p>
        </div>
    )
    return(
        <ProfileContainer>
            <Profile onClick={() => route.push("/profile")}>
                    <img src={user.picture} alt={user.name} />
                    <p>{user.name}</p>
            </Profile>
            <Link style={{fontSize: "1rem",}} href="/api/auth/logout"><Logout>Log out</Logout></Link>
        </ProfileContainer>
    )
}
const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row !important;
    align-items: end !important;
    gap: 2rem;
`;

const Logout = styled.p`
transition: 0.3s;

&:hover {
    color: #aaa;
}
`;

const Profile = styled.div`
    cursor: pointer;
    img{
        border-radius: 50%;
        width: 1rem;
        height: 1rem;
    }
    

`;
