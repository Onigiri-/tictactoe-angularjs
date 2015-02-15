'use strict';

/**
 * @ngdoc function
 * @name tictactoeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tictactoeApp
 */
function MainCtrl($scope) {
    //default settings
    //
    $scope.firstPlayer = 'You are';
    $scope.grid = 3;
    $scope.combos = [];
    $scope.board = [];
    $scope.getNumber = [];

    //after clicked, make board and start game
    //
    $scope.startGame = function() {
        $scope.select_player = true; //start gameボタンを隠して、resetボタンをかわりに表示させる

        var grid = $scope.grid,
            board = $scope.board,
            combos = $scope.combos;

        for (var i = 0; i < grid * grid; i++) {
            board.push(i);
            console.table(board);
        };
        //alert(grid);
        //var grid_size = grid * grid;
        //alert(grid_size);

        //勝ちとなる組み合わせ
        //
        for (var i = 0, c = [], d = []; i < grid; i++) {
            for (var j = 0, a = [], b = []; j < grid; j++) {
                a.push(i * grid + j);
                b.push(j * grid + i);
            }
            combos.push(a, b);
            c.push(i * grid + i);
            d.push((grid - i - 1) * grid + i);
        }
        combos.push(c, d);
        console.table(combos);
    };
    $scope.reset = function() {
        $scope.select_player = false; //start gameボタンが表示されるようになる
        $scope.board = [];
        $scope.combos = [];
        $scope.getNumber = [];
        //console.table($scope.board);
    };
    $scope.caputuredPiece = function(index){
    	//valueの書き換え
    	//$scope.board[index]をgetNumber配列に入れる
    	$scope.getNumber.push($scope.board[index]);
    	console.log($scope.getNumber);
    }
    //クリックした箇所の算出方法
    //sum+=2^Nのとき、仮に1、2がクリックされるとsum = 1*1 + 2*2 = 5となり、この式で5を出す組み合わせは1.2の組み合わせしかないので、クリックされたのが1.2とわかる
    //sum+=10^Nだとわかりやすい
    //1がクリックされると10、2がクリックされると100 sum = 110 は桁数からクリックされた数字がわかる
    //が、メモリを多く使うのでsum+= 2^Nで十分
}
angular.module('tictactoeApp')
    .controller('MainCtrl', MainCtrl);
