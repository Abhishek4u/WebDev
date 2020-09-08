const search = document.querySelector(".search");
const input = document.querySelector("input");

const p = document.querySelector("p");

search.addEventListener("click", function (e) {
    e.preventDefault();

    populateProfile(input.value);
    populateFollowers(input.value);
})

async function populateProfile(id) {

    let { data } = await axios.get(`api/v1/users/${id}`);
    console.log(data);

    let user = data.user;
    let { email_id, handle } = user;

    p.innerHTML = `<p> Email : ${email_id}</p> <p> Handle : ${handle} </p>`;
}