import React from "react"
import { Helmet } from "react-helmet"
import profileImage from "../images/profile.jpg"
import favicon from "../images/favicon.ico"
import appleTouchIcon from "../images/profile.jpg"

export default () =>(
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>tomoya-tsuji</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <meta name="description" content="UI/UXデザイナー。Tomoya Tsujiのポートフォリオサイトです。よかったら覗いてみてください。"></meta>
      <meta name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
      <link href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,700&amp;subset=latin-ext" rel="stylesheet"></link>
      <link rel="icon" href={favicon}></link>
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon}></link>
    </Helmet>

    <div className="profile_image">
      <img src={profileImage} alt="プロフィール画像"/>
    </div>
    <h1>TOMOYA TSUJI</h1>
    <p className="name">辻 朝也 / デザイナー</p>
    <p className="self_introduction">
      大学でプロダクトデザイン・未来予測デザインを学び、2016年にクックパッド株式会社にUI/UXデザイナーとして入社。入社後、サービスの核となるレシピ投稿関連の画面設計や開発を。その後機械学習を使った料理判定機能「 料理きろく 」の開発、有料会員向け機能を中心に検索体験の改善に取り組みました。 現在は新規事業開発メンバーとしてデザインとフロントエンド開発をしています。 複数の職域・領域を横断し、常に人に寄り添ったものづくりを大事にしており 企業に勤める傍ら、経験を活かしウェブやアプリケーションの制作、開発、ブランディングにも取り組んでいます。
    </p>

    <div className="career">
      <p><span className="years">1993</span> BORN IN KYOTO, JAPAN</p>
      <p><span className="years">2012</span> Hosei University</p>
      <p><span className="years">2013</span> amadana corp. </p>
      <p><span className="years">2013</span> SARAH inc. </p>
      <p><span className="years">2015</span> Takram </p>
      <p><span className="years">2016</span> GRADUATED FROM UNIV. </p>
      <p><span className="years">2016</span> Cookpad,inc</p>
    </div>

    <h3>Speaker</h3>
    <ul>
      <li>・<a href="https://tigerspike.connpass.com/event/82821/?fbclid=IwAR1bWCICmPBLohOiP36qkXuYacyz2Raj3swJ66lQ4QkrOlW9NLafZQW08Yg"> Tigerspike UX Meetup #4 〜デザイナーの働きやすさとは〜</a> (Apr.2018 )</li>
      <li>・<a href="https://techconf.cookpad.com/2018/">Cookpad TechConf 2018</a> Feb.2018</li>
      <li>・<a href="https://blog.camph.net/event/service-development/">「サービス開発勉強会 〜クックパッドも利用する”最速”でアイデアを形にする方法〜</a> (Jun.2017)</li>
      <li>・<a href="https://linotice.tumblr.com/post/159708290264/20170418">IT業界でデザイナーとして働くってどんなこと？</a> (Feb.2017 )</li>
    </ul>

    <h3>Contact</h3>
    <p>お仕事のご相談・ご依頼等はメールにてご連絡ください</p>
    <p>tomoya.tsuji.work[at]gmail.com</p>
      
  </div>
) 
