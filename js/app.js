var gApp = angular.module('gApp', []);
    gApp.run(function($rootScope){
    	$rootScope.address = "서울시 금천구 가산디지털2로 115 대륭테크노타운3차";
    	$rootScope.dns = "GooDee";
    	$rootScope.title = "Portfolio";
    	$rootScope.name = "유준선";
    });
	gApp.controller('gCtrl', function($scope) {
		$scope.htmlCheck = false;
		$scope.bodyCheck = false;
		$scope.btCheck = false;
		$scope.projectFlag = false;
		$scope.projectUrl = "";
		$scope.btnActive = 1;
		
		$scope.dropEvent = function() {
			$scope.htmlCheck = !$scope.htmlCheck;
			$scope.bodyCheck = !$scope.bodyCheck;
			$scope.btCheck   = !$scope.btCheck;
		};
		
		$scope.projectEvent = function(rows) {
			$scope.row = rows;
			if($scope.projectUrl == rows.url) {
				$scope.projectUrl = "";
				$scope.projectFlag = false;
			} else {
				$scope.projectUrl = rows.url;
				$scope.projectFlag = true;
			}
		}
		
		$scope.iFrameLink = function(){
			if($scope.iframeView){
				location.href = $scope.iframeView;
			}
		}
		
		$scope.btnList = [
			{filter: "*",      name: "All",      active: true },
			{filter: ".bgOn",  name: "Personal", active: false},
			{filter: ".bgOff", name: "Team",     active: false}
		];
		
		$scope.dataSource = [
			{
			 path: "portfolio/",
			 url : "team/team.pdf", 
			 title: "Team",
			 name: "Impression",
			 img: "team/TeamImpression1.png",
			 img2: "team/TeamImpression2.png",
			 type : true, 
			 contents: "처음 만드는 홈페이지라서 어떤 것부터 시작해야 되는지도 몰랐고, 팀원들과 역할 분담을 어떻게 해야될지가 가장 어려웠던 것 같습니다. 교육을 받고도 어떻게 응용해야될지를 몰라서 흐지부지 지나간 시간들이 많아서 아쉬웠고, 지금 다시 팀원들과 홈페이지 제작을 하게 된다면 더 좋은 기능들을 넣은 홈페이지를 제작할 수 있을 것 같습니다."
			},{
			 path: "portfolio/",
			 url : "personal/personal.pdf", 
			 title: "Personal",
			 name: "Impression",
			 img: "personal/PersonalImpression1.png",
			 img2: "personal/PersonalImpression2.png",
			 type : false,
			 contents: "개인 프로젝트로 홈쇼핑 페이지를 만들게 되었습니다. 혹시나 홈쇼핑 자영업을 하게 된다면으로 한번쯤 홈페이지를 만들어 볼까 싶기도 했었습니다. 상품의 주제를 선택하던 중 임시로 꽃병을 선택했습니다. 처음으로 혼자 만든 홈페이지인데 많이 부족한 부분이 있습니다. 프론트엔드 쪽의 실력이 부족하여 스타일 대부분을 부트스트랩에 의존하게 되었습니다. 게다가 기획을 정확하게 설정하지 못한것도 있고, 버그 발생에 대처가 늦어서 미흡한 부분이 매우 많이 생겼습니다."
			},{
			 path: "media/",
			 url : "personal.mp4", 
			 title: "Personal",
			 name: "Media",
			 img2: "personal/PersonalMedia.png",
			 type : false, 
			 contents: ""
			}
		];
		
		$scope.btnEvnet = function(index){
			$scope.projectUrl = "";
			$scope.projectFlag = false;
			
			for(var i = 0; i < $scope.btnList.length; i++){
				$scope.btnList[i].active = false;
			}
			$scope.btnList[index].active = true;
			$scope.grid.isotope({ filter: $scope.btnList[index].filter });
		}
		
		setTimeout(function(){
			$scope.grid = $('#portfolioGroup').isotope();
		}, 200);
	});
	gApp.directive('resize', function ($window) {
	    return function (scope, element) {
	        var w = angular.element($window);
	        scope.getWindowDimensions = function () {
	            return {
	                'h': w.height(),
	                'w': w.width()
	            };
	        };
	        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
	            if(newValue.w >= 768){
					scope.htmlCheck = false;
					scope.bodyCheck = false;
					scope.btCheck = false;
				}
	        }, true);

	        w.bind('resize', function () {
	            scope.$apply();
	        });
	    }
	});