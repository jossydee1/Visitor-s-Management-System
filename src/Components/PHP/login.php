<?php
require 'connect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);

    //Sanitize
    $username = $request -> username;
    $password = $request -> password;

    //Store
    $sql = "SELECT * FROM `vmslogin` WHERE (
        `vmsusername`,
        `vmspassword`

        ) VALUES

        ('{$username}',
        '{$password}')
        ";

        if(mysqli_query($con,$sql))
        {
            http_response_code(201);
        }
        else
        {
            http_response_code(422);
        }
}


<?php
include_once("Core.php");
require 'connect.php';




// $host="localhost";
// $user="root";
// $password="";
// $db="new_vms";

// mysqli_connect($host,$user,$password);
// mysqli_select_db($db);

// $postdata = file_get_contents("php://input");



if (isset($_POST['username'])) {
    $username=$_POST['username'];
    $password=$_POST['password'];

    $sql = "SELECT * FROM `vmffslogin` WHERE `vmsusername`= '".$username."' AND `vmspassword`= '".$password."' 
    limit 1";

    $result = mysqli_query($sql);


        if(mysqli_num_rows($result)==1)
        {
            // http_response_code(201);
            echo "Success";
            exit();
        }
        else
        {
            // http_response_code(422);
            echo "Why na?";
            exit();
        }

}



