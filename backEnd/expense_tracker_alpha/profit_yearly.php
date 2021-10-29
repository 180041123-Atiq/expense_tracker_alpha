<?php

	$conn = new mysqli("localhost","root","","expense_tracker_alpha");
	
	if($conn->connect_error) {
		die("Connection failed : ".$conn->connect_error);
	}
	
	$json = file_get_contents('php://input');
	
	$obj = json_decode($json,true);
	
	//$date_col = $obj['date_col'];
	//$type = $obj['type'];
	$user_id = $obj['user_id'];
	//$user_id = 19;
	
	$sql = "SELECT SUM(income_table.amount)-SUM(expense_table.amount) as yprofit,expense_table.month_col FROM expense_table INNER JOIN income_table ON expense_table.user_id=$user_id AND expense_table.user_id=income_table.user_id AND expense_table.date_col <= CURDATE() AND expense_table.date_col > DATE_SUB(CURDATE(), INTERVAL 1 YEAR) AND expense_table.month_col=income_table.month_col GROUP BY expense_table.month_col;";
	
	$result = $conn->query($sql);
	
	$arr = array();
	
	//$flag = 0;
	
	if($result->num_rows>0){
		
		while($row = $result->fetch_assoc()){
			
			array_push($arr,$row);
			
		}
		
		echo json_encode($arr);
		
	}else{
		echo json_encode($arr);
	}
	
	//if(flag==1)echo json_encode($arr);
	
	$conn->close();
	
?>