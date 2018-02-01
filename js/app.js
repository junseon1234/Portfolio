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
			 contents: "처음으로 주제를 잡아서 만드는 홈페이지었습니다, DB부분과 jQuery 일부를 다루게 되었는데 처음 기획했던 것과 달리 DB의 구조나 용도가 계속 바뀌게 되면서 기획과는 매우 다른 구조의 DB를 이용하게 되었습니다. jQuery는 같은 코드를 응용하지 않고 기존의 코드를 반복해서 사용하다보니 길이도 길어져서 나중에 수정해야 할 때 찾기가 어려워졌습니다. 그렇지만 jQuery의 다양한 활용법과 기능들을 알게되었고 jQuery와 DB를 조합해서 나오는 게시판 페이지를 재미있게 만들었습니다."
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