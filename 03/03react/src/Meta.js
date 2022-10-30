import React,{memo} from 'react'
import {Helmet,HelmetProvider} from 'react-helmet-async';

const Meta = memo((props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charset='utf-8' />
        <title>{props.title}</title>
        {/* SEO 태그 */}
        <meta name='description' content={props.description} />
        <meta name='keywords' content={props.keywords} />
        <meta name='author' content={props.author} />
        <meta name='subject' content={props.subject} />
        <meta name='copyright' content={props.copyright} />
        <meta name='content-language' content="ko" />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={props.title} />
        <meta property='og:description' content={props.description} />
        <meta property='og:image' content={props.image} />
        <meta property='og:url' content={props.url} />
        <link rel="icon" href={props.icom} type="image/png" />
        <link rel="shortcut icon" href={props.shortcutIcon} type="image/png" />
        <link rel="apple-touch-icon" href={props.appleTouchIcon} type="image/png" />
        {/* 구글 웹폰트 적용 */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Karma" />
      </Helmet>
    </HelmetProvider>
  );
});

Meta.defaultProps = {
  title: 'React Example',
  description: 'React.js 예제입니다.',
  keywords: 'React',
  author: '호쌤',
  subject: 'React.js Frontend Programming',
  copyright: "Lee K.H",
  url: window.location.href,
  image: null,
  icon: null,
  shortcutIcon: null,
  appleTouchIcon: null
};

export default Meta;