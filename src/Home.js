import React from 'react';


class Home extends React.Component{
  constructor(props){
    super(props);

    this.state ={
        
    }
}

    render(){
        return (
          <div>
            
            <head>
                <link rel="stylesheet" type="text/css" href="App.css"/>
                
                <link rel="shortcut icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXR21-RGZrdBBLbASCGZyQx6xAfuKmLf4AMw6fxau1w0-2jJ4T" />
                <title>Home</title>
            
            
            </head>

            <header>
                    <nav className="navigation-bar">
                        <a href="index.html">
                            <img className="logo" src="https://image.freepik.com/free-vector/university-campus-logo_1447-1791.jpg"
                             alt="Main logo"/>
                        </a>
                        <ul>
                            <li><a href="index.html" target="">Home</a></li>
                            <li><a href="index2.html" target="">Campus</a></li>
                            <li><a href="index3.html" target="">Student</a></li>
                        </ul>
                    </nav>
                </header>

    <body>
        <div className ="homePic">
            <img src = "https://mountsaintvincent.edu/wp-content/uploads/2019/02/CNR-3.jpg"/>
            <div class="top-left">Campus Manager</div>
        </div>
       

               
<div className ="paras">
<h1 className="heading">Information of Campuses and Students</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus.
     Proin nibh nisl condimentum id venenatis. Ut consequat semper viverra
      nam libero justo laoreet sit. Bibendum arcu vitae elementum curabitur 
      vitae. Vel turpis nunc eget lorem dolor sed viverra ipsum. Ultrices vitae 
      auctor eu augue. Ac orci phasellus egestas tellus rutrum tellus pellentesque.
       Donec massa sapien faucibus et molestie ac feugiat. Integer vitae justo eget
        magna fermentum iaculis eu non. Sapien faucibus et molestie ac feugiat sed 
        lectus vestibulum mattis. Quam nulla porttitor massa id neque. Commodo odio
         aenean sed adipiscing diam donec adipiscing tristique risus.
     Faucibus turpis in eu mi.</p>
     <br></br>
     <p>Dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus.
             Proin nibh nisl condimentum id venenatis. Ut consequat semper viverra
              nam libero justo laoreet sit. Bibendum arcu vitae elementum curabitur 
              vitae. Vel turpis nunc eget lorem dolor sed viverra ipsum. Ultrices vitae 
              auctor eu augue. Ac orci phasellus egestas tellus rutrum tellus pellentesque.
               Donec massa sapien faucibus et molestie ac feugiat. Integer vitae justo eget
                magna fermentum iaculis eu non. Sapien faucibus et molestie ac feugiat sed 
                lectus vestibulum mattis. Quam nulla porttitor massa id neque. Commodo odio
                 aenean sed adipiscing diam donec adipiscing tristique risus.
             Faucibus turpis in eu mi.</p>

</div>
              <div >
                <footer>
                        
                      
                            <ul className="styleF">
                                <li> <a href="index4.html">Privacy Policy</a></li>
                                <li> <a href="index4.html">Terms of Use</a></li>
                                <li> <a href="index4.html">Sponsers</a></li>
                                <li><a href="index4.html">Location</a></li>
                            </ul>
                
                        <p>&copy; 2019 Campus Manager</p>
                   
                    </footer>
            </div>
                    



            
          
            
            
            
            </body>


           </div>
        )
    }
}

export default Home;