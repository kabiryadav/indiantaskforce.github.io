var myapp = angular.module('myapp',[]);





myapp.controller('ctrlDashboard', function ($scope,$http) {
	
	$scope.district_data = [];
	$scope.state_data=[];
	$scope.ac_data = [];
	$scope.occupation_data = [];
	$scope.length = "";
	$scope.show_caste_other = false;
	$scope.reason_show = true;
	$scope.registration_show = false;
    $scope.notregistration_show = true;
	$scope.hide = false;	
	$scope.s_college = false;
	$scope.show_whatsapp = true;
	$scope.join_script1 = false;
	$scope.join_script2 = true;
	$scope.show_party = false;
	$scope.show_party_post = false;
	
	$scope.get_query = function () {
		$scope.query_data = [];
		$http.post('php/get_query.php').success(function(data,status,headers,config){
				if (data.msg !='')
				{		 
					
					for (i=0; i < data.length; i++)
					{
						$scope.query_data[i] = data[i].query;
					}
				}
				else
				{
				$scope.errors.push(data.error);
				}
			}).error(function(data,status){
				$scope.errors.push(status);
			});
	
	};
	
		$scope.get_subquery = function() {
		$scope.subquery_data = [];
		$http.post('php/get_sub_query.php',{'query':$scope.query}).success(function(data,status,headers,config){
				if (data.msg !='')
				{		 
					
					for (i=0; i < data.length; i++)
					{
						$scope.subquery_data[i] = data[i].subquery;
					}
				}
				else
				{
				$scope.errors.push(data.error);
				}
			}).error(function(data,status){
				$scope.errors.push(status);
			});
	
	};

	
		$scope.get_script_en = function() {
		$scope.script1="";
		$http.post('php/get_script_en.php',{'subquery':$scope.subquery}).success(function(data,status,headers,config){
				if (data.msg !='')
			{
				$scope.script1   = data[0].english_script;
				

				}
			else
			{
				//$scope.errors.push(data.error);
			}
			}).error(function(data,status){
				$scope.errors.push(status);
			});
	
	};	
	
		$scope.get_script_hin = function() {
		$scope.script2= "";
		$http.post('php/get_script_hin.php',{'subquery':$scope.subquery}).success(function(data,status,headers,config){
				if (data.msg !='')
			{
				$scope.script2   = data[0].hindi_script;

				}
			else
			{
				//$scope.errors.push(data.error);
			}
			}).error(function(data,status){
				$scope.errors.push(status);
			});
	
	};
	
	$scope.get_state_name = function () {
	$http.post('php/get_state.php').success(function(data,status,headers,config){
			if (data.msg !='')
			{		 
				
				for (i=0; i < data.length; i++)
				{
					$scope.state_data[i] = data[i].state;
				}
			}
			else
			{
			$scope.errors.push(data.error);
			}
		}).error(function(data,status){
			$scope.errors.push(status);
		});

	};
	
	$scope.get_district_name = function () {
		$scope.district_data = [];
		$http.post('php/get_district_name.php',{'state':$scope.state}).success(function(data,status,headers,config){
				if (data.msg !='')
				{		 
					
					for (i=0; i < data.length; i++)
					{
						$scope.district_data[i] = data[i].district;
					}
				}
				else
				{
				$scope.errors.push(data.error);
				}
			}).error(function(data,status){
				$scope.errors.push(status);
			});
	
	};
	
		$scope.getName = function(){
		$scope.registration   = "";
			$http.post('php/get_name.php',{'phone':$scope.phone}).success(function(data,status,headers,config){
			if (!$.trim(data))
			{
				
				$scope.registration   = "not registered. Please profile his full information";
				$scope.messagingflag   = "message";
				$scope.fmessagingflag   = "message";
				$scope.regphone   = $scope.phone;
				$scope.registration_show = true;
				$scope.team_show = true;
                $scope.faq_show = false;
				
			}
			else
			{
				console.log(data);
				$scope.userid   = data[0].userid;
				$scope.fuserid   = data[0].userid;
				$scope.team   = data[0].team;
				$scope.registration   = "registered. Please ask his queries";
				$scope.messagingflag   = "notmessage";
				$scope.fmessagingflag   = "notmessage";
				$scope.faqphone   = $scope.phone;
				$scope.registration_show = false;
                $scope.faq_show = true;
				$scope.team_show = false;
				}
		}).error(function(data,status){
			//$scope.errors.push(status);
		});
	
	
	};

	
	$scope.get_ac_name = function() {
		console.log($scope.state);
		$scope.ac_data = [];
		$http.post('php/get_ac_name.php',{'district':$scope.district,'state':$scope.state}).success(function(data,status,headers,config){
				if (data.msg !='')
				{		 
					
					for (i=0; i < data.length; i++)
					{
						$scope.ac_data[i] = data[i].ACName;
					}
				}
				else
				{
				$scope.errors.push(data.error);
				}
			}).error(function(data,status){
				$scope.errors.push(status);
			});
	
	};


	
	$scope.getOccupation = function() {
		$http.post('php/get_occupation_data.php').success(function(data,status,headers,config){
				if (data.msg !='')
				{		 
					
					for (i=0; i < data.length; i++)
					{
						$scope.occupation_data[i] = data[i].occupation;
						$scope.ac_status = false;
					}
					
				}
				else
				{
					$scope.errors.push(data.error);
				}
			}).error(function(data,status){
				$scope.errors.push(status);
			});
	
	};
	
	$scope.change_performance_status = function(){
		switch ($scope.govt_performance) {
			case 'Very Satisfied':
                $scope.reason_show = true;
                break;
            case 'Partially Satisfied':
                $scope.reason_show = true;
                break;
            case 'Partially Dissatisfied':
                $scope.reason_show = false;
                break;
			case 'Very Dissatisfied':
                $scope.reason_show = false;
                break;
            default:
        }
	};

	$scope.show_college = function(){
		switch ($scope.occupation) {
			case 'Student':
                $scope.s_college = true;
                break;
             default:
				$scope.s_college = false;
   
        }
	};

	$scope.whatsapp_show = function(){
		switch ($scope.whatsapp_status) {
			case true:
                $scope.show_whatsapp =false;
                $scope.whatsapp_no = $scope.phone;
                break;
             default:
                $scope.show_whatsapp = true;
                $scope.whatsapp_no = "";

   
        }
	};
	
	
	
	$scope.get_state_name();
	$scope.get_query();
	$scope.getOccupation();

	$scope.show_registration = function(){
		switch ($scope.registration) {
			case 'notregistered':
                $scope.registration_show = true;
                $scope.notregistration_show = false;
                $scope.name = "NA";
                $scope.district = "NA";
                $scope.ac = "NA";
                $scope.block = "NA";
                $scope.gender = "NA";
                $scope.age = "NA";
                $scope.location = "NA";
                $scope.education = "NA";
                $scope.occupation = "NA";
                $scope.party_worker = "NA";
                $scope.source = "NA";
                break;
            default:$scope.registration_show = false;
                $scope.notregistration_show = true;
        }
	};
	
	$scope.show_team1 = function(){
		switch ($scope.team) {
			case 'No':
				$scope.join_script1 = true;
				$scope.join_script2 = false;
                break;
				default: 
				$scope.join_script1 = false;
				$scope.join_script2 = true;
					
        }
	};	
		
		$scope.show_parties = function(){
		switch ($scope.party_worker) {
			case 'Yes':
				$scope.show_party = true;
				break;
				default: 
				$scope.show_party = false;
				$scope.parties = "NA";
					
        }
	};

	$scope.$watch('show_party', function() {
        if($scope.show_party == true)
		{
			$scope.show_party_post = true;
		}else{
			$scope.show_party_post = false;
			$scope.positioninparties ="";
		}
    });
});