
    function AddData() {
      
       document.getElementById("name").innerHTML=
        document.getElementById("Student-name").value;
        document.getElementById("clgName").innerHTML=
        document.getElementById("collage-name").value;
        document.getElementById("location").innerHTML=
        document.getElementById("clglocation").value;
        document.getElementById("img").innerHTML=
        document.getElementById("photo").value;
      }


    
window.addEventListener('load11', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }
  
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
    });
  });

  window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }
  
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
    });
  });