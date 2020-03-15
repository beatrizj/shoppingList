function ListaComprasController($scope) {
    $scope.itens = [
        {
            produto: 'Leite',
            quantidade: 2,
        },
        {
            produto: 'Cerveja',
            quantidade: 12,
        }
    ]

    $scope.adicionaItem = function () {
        $scope.itens.push({
            produto: $scope.item.produto,
            quantidade: $scope.item.quantidade,
        }),
        $scope.item.produto = $scope.item.quantidade = ''
    }
}