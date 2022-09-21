function ListaComprasController($scope) {
    $scope.itens = [
        
    ]

    $scope.adicionaItem = function () {
        $scope.itens.push({
            produto: $scope.item.produto,
            quantidade: $scope.item.quantidade,
        }),
        $scope.item.produto = $scope.item.quantidade = ''
    }
}