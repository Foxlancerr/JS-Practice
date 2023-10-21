
const fetchUser = (username, callback) => {
    setTimeout(() => {
        callback({ username })
    }, 2000)
}

const fetchSingleImages = (img, callback) => {
    setTimeout(() => {
        callback(img)
    }, 2000)
}

const fetchImages = (images, callback) => {
    setTimeout(() => {
        callback(images)
    }, 2000)
}

fetchUser("ahmad", (user) => {
    console.log(user.username)
})

fetchUser("ahmad", (user) => {
    console.log(user.username)
})

fetchUser("ahmad", (user) => {
    console.log(user.username)
    fetchImages(["image1", "Image2", "Image3"], (img) => {
        console.log(img)
    })
})

fetchUser("ahmad", (user) => {
    console.log(user.username)
    fetchImages(["image1", "Image2", "Image3"], (img) => {
        console.log(img)
        fetchSingleImages(img[0], (s_img) => {
            console.log(s_img)
        })
    })
})

fetchUser("ahmad", (user) => {
    console.log(user.username)
    fetchImages(["image1", "Image2", "Image3"], (img) => {
        console.log(img)
        fetchSingleImages(img[0], (s_img) => {
            console.log(s_img)
            fetchUser("kamran", () => {
                console.log("loop")
            })
        })
    })
})

fetchUser("ahmad", (user) => {
    console.log(user.username)
    fetchImages(["image1", "Image2", "Image3"], (img) => {
        console.log(img)
        fetchSingleImages(img[0], (s_img) => {
            console.log(s_img)
            console.log("the user is " + user.username + " having the image which he like [ " + img + " ] and the most faverate image is " + s_img)
        })
    })
})

