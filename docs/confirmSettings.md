!!! note w50 "Confirm that all fields have values"
    You are assigned to POD:<w class="pod"></w>  
    Login for exercises 1-3: <w class="nae_admin"></w>  
    Password for exercises 1-3: <w class="nae_pw"></w>   
    Login for exercise 4: <w class="nas_admin"></w>  
    Password for exercise 4: <w class="nas_pw"></w>  


??? note w50 "Enter any missing information"
    <form id="info">
    <label for="info">Example Input Form</label><br>

    <label for="EP">POD:</label>
    <input type="text" id="pod" name="pod"><br>

    <label for="nae_admin">Login for exercises 1-3:</label>
    <input type="text" id="nae_admin" name="nae_admin"><br>
    
    <label for="nae_pw">Password for exercises 1-3:</label>
    <input type="text" id="nae_pw" name="nae_pw"><br>
    
    <label for="nas_admin">Login for exercise 4:</label>
    <input type="text" id="nas_admin" name="nas_admin"><br>

    <label for="nas_pw">Password for exercise 4:</label>
    <input type="text" id="nas_pw" name="nas_pw"><br>


    <br>
    <button onclick="setValues()">Update Lab Guide</button>
    </form>