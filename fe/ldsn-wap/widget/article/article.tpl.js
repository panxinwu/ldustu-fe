 /**
  * 文章模板
  * @author yuxuan
  * @date 2015-02-11
  * @version 1.0.0
  */
var tmpl ={
    article: [
        '<header class="item-header">',
            '<img src="' + ldev.context.IMG_DOMAIN + '<%=user_info[\"head_pic\"]%>' + ldev.context.IMG_100_50 + '" class="user-topic"/>',
            '<section class="article-info">',
                '<section class="article-from">',
                    '<em><%=user_info[\"username\"]%></em>',
                '</section>',
                '<time><%=ldev.timeFormat(create_time)%></time>',
            '</section>',
        '</header>',
        '<section node-type="article-detail" aid="<%=article_id%>">',
            '<h2 class="article-title">',
                '<%=title%>',
            '</h2>',
            '<article class="article-content">',
                '<%-detail.content%>',
            '</article>',
        '</section>',
        '<section class="article-handle-info">',
            '<ul>',
                '<li>',
                    '<i class="thumbs up icon"></i>',
                    '<em node-type="favour-num" aid="<%=article_id%>"><%=favour_num%></em>',
                '</li>',
                '<li>',
                    '<i class="edit sign icon"></i>',
                    '<em node-type="comment-num" aid="<%=article_id%>"><%=comment_num%></em>',
                '</li>',
            '</ul>',
        '</section>',
        '<footer class="article-footer">',
            '<section class="article-handle">',
                '<%if (favour_info) {%>',
                '<click node-type="favour-button" aid="<%=article_id%>" class="favour handle active">',
                '<%} else {%>',
                '<click node-type="favour-button" aid="<%=article_id%>" class="favour handle">',
                '<%}%>',
                    '<i class="thumbs up icon"></i>',
                    '<em class="opa">赞</em>',
                '</click>',
                '<click class="share handle share-click">',
                    '<i class="share icon"></i>',
                    '<em class="opa" aid="<%=article_id%>">分享</em>',
                '</click>',
            '</section>',
            '<section class="comment">',
                '<ul class="article-comment" node-type="comment-list" aid="<%=article_id%>">',
                    '<%if(comment_list){%>',
                        '<%for(var i=0;i<comment_list.length;i++){%>',
                            '<li class="comment-item" comment-id="<%=comment_list[i].comment_id%>">',
                                '<img src="' + ldev.context.IMG_DOMAIN + '<%=user_info[\"head_pic\"]%>' + ldev.context.IMG_100_50 + '" class="comment-topic">',
                                '<section class="comment-detail">',
                                    '<section class="comment-info">',
                                        '<time class="comment-time"><%=ldev.timeFormat(comment_list[i].create_time)%></time>',
                                        '<section class="comment-user-info">',
                                            '<%=comment_list[i].user_info[\"username\"]%>',
                                        '</section>',
                                    '</section>',
                                    '<section class="comment-content">',
                                        '<%=comment_list[i].content%>',
                                    '</section>',
                                '</section>',
                            '</li>',
                        '<%}%>',
                    '<%}%>',
                '</ul>',
                '<%if(comment_num && comment_num > 5){%>',
                    '<click class="add-more-comment" node-type="get-more-comment">加载更多评论</click>',
                '<%}%>',
                '<section class="edit-comment">',
                    '<click class="submit" node-type="submit-comment" aid="<%=article_id%>">',
                        '<i class="reply mail icon"></i>',
                    '</click>',
                    '<section class="input">',
                        '<input aid="<%=article_id%>" node-type="comment-input" type="text" />',
                    '</section>',
                '</section>',
            '</section>',
        '</footer>'
    ],
    comment: [
        '<li class="comment-item" comment-id="<%=comment_id%>">',
            '<img src="' + ldev.context.IMG_DOMAIN + '<%=head_pic%>' + ldev.context.IMG_100_50 + '" class="comment-topic">',
            '<section class="comment-detail">',
                '<section class="comment-info">',
                    '<time class="comment-time"><%=time%></time>',
                    '<section class="comment-user-info">',
                        '<%=username%>',
                    '</section>',
                '</section>',
                '<section class="comment-content">',
                    '<%=content%>',
                '</section>',
            '</section>',
        '</li>'
    ]
} 

module.exports = tmpl;