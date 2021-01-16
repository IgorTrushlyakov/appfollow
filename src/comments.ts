import {IComment} from './types/Commets';

export const comments: IComment[] = [
    {
        "author": "Nikolay",
        "message": "Hi",
        "comments": [
            {
                "author": "Olga",
                "message": "Hi there",
                "comments": []
            },
            {
                "author": "Nikolay",
                "message": "What's up?!",
                "comments": [
                    {
                        "author": "Olga",
                        "message": "How are u?",
                        "comments": []
                    }
                ]
            }
        ]
    },
    {
        "author": "Alex",
        "message": "Hey folks!",
        "comments": []
    }
]
