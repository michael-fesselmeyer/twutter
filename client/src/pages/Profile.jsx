import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProfile } from "../api/users"
import Post from "../components/Post"

export default function Profile() {
  const params = useParams()
  const [profile, setProfile] = useState({})

  // Fetch user by url param /:handle
  useEffect(() => {
    getProfile(params.handle).then(setProfile)
  }, [params.handle])

  // Console log the profile when it changes
  useEffect(() => {
    console.log(profile);
  }, [profile])

  return (
    <div>
      <h1>{profile.username}</h1>
      <pre>@{profile.handle}</pre>
      <hr />

      {/* {profile.posts && profile.posts.map(el => ( */}
      {profile.posts?.map(post => (
        <Post
          key={post._id}
          text={post.text}
          username={profile.username}
          handle={profile.handle}
        />
      ))}
    </div>
  )
}