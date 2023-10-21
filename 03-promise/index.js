const fetchUser = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ username })
        }, 2000)
    })
}

const fetchImages = (images) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(images)
        }, 2000)
    })
}

const fetchSingleImage = (img) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(img)
        }, 2000)
    })
}

// calling functions and check it

fetchUser("Ahmad")
// Promise {<pending>}

fetchUser("Ahmad")
    .then((username) => {
        console.log(username)
    })
// Promise {<pending>}
// VM1311:3 {username: 'Ahmad'}

fetchUser("Ahmad")
    .then((username) => {
        console.log(username)
        fetchImages(["image1", "Image2", "Image3"])
    })
// Promise {<pending>}
// VM1371:3 {username: 'Ahmad'}

fetchUser("Ahmad")
    .then((username) => {
        console.log(username)
        fetchImages(["image1", "Image2", "Image3"])
    }).then((images) => {
        console.log(images)
    })
// Promise {<pending>}
// VM1455:3 {username: 'Ahmad'}
// VM1455:6 undefined

fetchUser("Ahmad")
    .then((username) => {
        console.log(username)
        fetchImages(["image1", "Image2", "Image3"])
    })
// Promise {<pending>}
// VM1528:3 {username: 'Ahmad'}

fetchUser("Ahmad")
    .then((username) => {
        console.log(username)
        fetchImages(["image1", "Image2", "Image3"])
    })
// Promise {<pending>}
// VM1530:3 {username: 'Ahmad'}

fetchUser("Ahmad")
    .then((username) => {
        console.log(username)
        fetchImages(["image1", "Image2", "Image3"])
            .then((images) => {
                console.log(images)
            })
    })


// now it will work perfectly
fetchUser("Ahmad")
    .then((username) => {
        console.log(username)
        fetchImages(["image1", "Image2", "Image3"])
            .then((images) => {
                console.log(images)
                fetchSingleImage(images[0])
                    .then((img) => {
                        console.log(img)
                    })
            })
    })

// Promise {<pending>}
// VM1966:3 {username: 'Ahmad'}
// VM1966:6 (3) ['image1', 'Image2', 'Image3']
// VM1966:9 image1 