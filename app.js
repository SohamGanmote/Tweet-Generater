const userName = document.querySelector("#name");
const userTweet = document.querySelector("#tweet");
const btn = document.querySelector("#btn")

const body = document.querySelector("body");

const date = new Date();
const time = new Date();

const formattedTime = time.toLocaleString("en-IN", {
    hour: "numeric",
    minute: "numeric",
});

const formattedDate = date.toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
});

function randNum() {
    const num = Math.ceil(Math.random() * 898);
    return num;
}

btn.addEventListener("click", function() {
    console.log("Tweeted");
    if (userName.value && userTweet.value != "") {

        const tweetBox = document.createElement("div");
        tweetBox.classList.add("tweetBox");

        const profile = document.createElement("div");
        profile.classList.add("profile");

        const profilPicture = document.createElement("div");
        profilPicture.classList.add("profilPicture");

        const img = document.createElement("img");
        img.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randNum()}.png`);

        const profilUser = document.createElement("div");
        profilUser.classList.add("profilUser");

        const h2 = document.createElement("h2");
        h2.innerText = `${userName.value}`;

        const p = document.createElement("p");
        p.innerText = `@${userName.value}`;

        const tweetText = document.createElement("div");
        tweetText.classList.add("tweetText");

        const p2 = document.createElement("p");
        p2.innerText = `${userTweet.value}`;

        const dateOfTweet = document.createElement("div");
        dateOfTweet.classList.add("dateOfTweet");

        const p3 = document.createElement("p");
        p3.innerText = `${formattedTime} · ${formattedDate}`;

        const likesShares = document.createElement("div");
        likesShares.classList.add("likesShares");

        const spn1 = document.createElement("span");
        spn1.innerHTML = `<b>${randNum()}K</b> Retweets`

        const spn2 = document.createElement("span");
        spn2.innerHTML = `<b>${randNum()}K</b>  Quote Tweets`

        const spn3 = document.createElement("span");
        spn3.innerHTML = `<b>${Math.ceil(Math.random() * 5)}M</b> Likes`

        const opetions = document.createElement("div");
        opetions.classList.add("opetions");

        const img1 = document.createElement("img");
        img1.setAttribute("src", "comment.png")

        const img2 = document.createElement("img");
        img2.setAttribute("src", "retweet.png")

        const img3 = document.createElement("img");
        img3.setAttribute("src", "like.png")

        const img4 = document.createElement("img");
        img4.setAttribute("src", "uplode.png")

        opetions.append(img1);
        opetions.append(img2);
        opetions.append(img3);
        opetions.append(img4);
        likesShares.append(spn1);
        likesShares.append(spn2);
        likesShares.append(spn3);
        dateOfTweet.append(p3);
        profilUser.append(h2);
        profilUser.append(p);
        profilPicture.append(img);
        profile.append(profilPicture);
        profile.append(profilUser);
        tweetBox.append(profile);
        tweetText.append(p2)
        tweetBox.append(tweetText);
        tweetBox.append(dateOfTweet);
        tweetBox.append(likesShares);
        tweetBox.append(opetions);
        body.append(tweetBox);

        userName.value = "";
        userTweet.value = "";
    } else {
        console.log("Enter UserName And Tweet");
    }
})