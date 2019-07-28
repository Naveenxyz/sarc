
export default (to, from, next) => {
    const auth_token = localStorage.getItem('auth_token')
    fetch('https://sarc-bphc-backend.herokuapp.com/api/auth', { 
        method: 'GET', 
        headers: new Headers({
            'Authorization': 'Bearer '+ auth_token, 
            'Content-Type': 'application/x-www-form-urlencoded'
        }), 
    }).then(resp => {
        if(resp) {
            next()
            console.log(resp.body.json())
        } else{
            next({path: 'login'})
        }
    })

    alert('yo')
    next()

  }
  