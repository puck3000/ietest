return [
    'endpoints' => [
        'api/search' => [
            'elementType' => 'Entry',
            'paginate' => false,
            'criteria' => [
                'limit' => 9,
                'search' => (craft()->request->getParam('q')) 
                ],
            'transformer' => function(EntryModel $entry) {
                return [
                    'title' => $entry->title,
                    'url' => $entry->url,
                    'searchUrl' => '/search?q=' . craft()->request->getParam('q'), 
                ];
            },
        ]
    ]
]