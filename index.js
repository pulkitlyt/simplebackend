
require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

const githubData={
  "login": "pulkitlyt",
  "id": 251352022,
  "node_id": "U_kgDODvtT1g",
  "avatar_url": "https://avatars.githubusercontent.com/u/251352022?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/pulkitlyt",
  "html_url": "https://github.com/pulkitlyt",
  "followers_url": "https://api.github.com/users/pulkitlyt/followers",
  "following_url": "https://api.github.com/users/pulkitlyt/following{/other_user}",
  "gists_url": "https://api.github.com/users/pulkitlyt/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/pulkitlyt/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/pulkitlyt/subscriptions",
  "organizations_url": "https://api.github.com/users/pulkitlyt/orgs",
  "repos_url": "https://api.github.com/users/pulkitlyt/repos",
  "events_url": "https://api.github.com/users/pulkitlyt/events{/privacy}",
  "received_events_url": "https://api.github.com/users/pulkitlyt/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Pulkit Luharuka",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 1,
  "following": 0,
  "created_at": "2025-12-24T15:41:42Z",
  "updated_at": "2026-05-26T19:44:38Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('heheheeheh')
})

app.get('/login',(req,res)=>{
    res.send('<h1>login karle bkl</h1>')
})
app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
