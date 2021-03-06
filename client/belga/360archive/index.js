import angular from 'angular';

import BelgaSearchPanelController from './BelgaSearchPanelController';

export default angular.module('belga.360archive', [
])
    .controller('BelgaSearchPanelController', BelgaSearchPanelController)
    .run(['$templateCache',($templateCache) => {
        $templateCache.put(
            'search-panel-belga_360archive.html',
            require('./views/search-panel.html')
        );
    }])
;
