$(document).ready( ()=> {
    let userContainer = [];
// user registration
    $("#formRegister").submit( (event)=> {
        event.preventDefault();
        let username = $("#name").val();
        let email = $("#emailRegister").val();
        let password = $("#passwordRegister").val();
        let confirmPassword = $("#confirmPassword").val();

        let details = {
            username,
            email,
            password,
            confirmPassword
        }
        userContainer.push(details);
        window.localStorage.setItem("Users", JSON.stringify(userContainer))
        alert("successfully saved!")
    })









    // $("#publish").click(function(event) {
        // event.preventDefault();
        // let postTitle = $("#postTitle").val();
        // let category = $("#categories").val();
        // // let image = $("#myFile").val();
        // let postContent = $("#content").val();

    //     let post = {
    //         postTitle,
    //         category,
    //         // image,
    //         postContent
    //     }
    //     console.log(post);
    // });


//     $("#myBtn").click(myFunction)
    
//     function myFunction() {
//         let dots = document.getElementById("dots");
//         let moreText = document.getElementById("more");
//         let btnText = document.getElementById("myBtn");
        
//         if (dots.style.display === "none") {
//             dots.style.display = "inline";
//             btnText.innerHTML = "Read more"; 
//             moreText.style.display = "none";
//         } else {
//             dots.style.display = "none";
//             btnText.innerHTML = "Read less"; 
//             moreText.style.display = "inline";
//         }
//     }
try {
    App.restore();
} catch (err) {
    App.load("login");
}
})
  
