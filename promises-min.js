const posts=[{title:"Post One",body:"This is post one"},{title:"Post Two",body:"This is post two"}];function getPosts(){setTimeout(()=>{let t="";posts.forEach(s=>{t+=`<li>${s.title}</li>`}),document.body.innerHTML=t},1e3)}function createPosts(t){return new Promise((s,o)=>{setTimeout(()=>{posts.push(t);s()},2e3)})}async function fetchUsers(){const t=await fetch("https://jsonplaceholder.typicode.com/users"),s=await t.json();console.log(s)}fetchUsers();