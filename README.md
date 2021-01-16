# appfollow

1. Реализовать отображение списка комментариев, ответов на них (по аналогии с habr.com), и всех уникальных авторов (отдельным от комментариев списком). При клике на автора подсвечивать все его комментарии в списке. Можно использовать CRA за основу. Дизайн произвольный.
 
Требования:
- TypeScript
- React
- Чистый CSS (css-modules опционально)
Данные для отображения:

const comments = [
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

