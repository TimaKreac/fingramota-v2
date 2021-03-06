import React from 'react'
import styles from './Article.module.scss'

const IndexArticle: React.FC = () => {
  return (
    <div className={styles.article}>
      <h1>Финансовая грамотность</h1>
      <article>
        <p>
          <i>
            Из-за невежества в сфере экономики и денег люди часто не в состоянии
            обеспечить себе достойную жизнь даже при хорошей зарплате. К тому же
            нашей финансовой безграмотностью часто пользуются другие люди, что
            приводит к печальным последствиям. Именно по этим двум причинам
            стоит изучать основы финансовой грамотности.
          </i>
        </p>
        <h2>Что такое финансовая грамотность?</h2>
        <p>
          Это не очень простой вопрос, потому что разные люди понимают его
          по-разному, да и само это понятие скорее философское и сугубо
          субъективное. Но если все же попытаться придать направление нашему
          курсу, то можно сказать, что:
        </p>
        <p>
          <b>Финансовая грамотность</b> — это четкое понимание того, как
          работают деньги, как их зарабатывать и управлять ими. Есть две главные
          особенности финансово грамотного человека. Первая: его расходы никогда
          не превышают доходы. Вторая: любая позитивная разница между месячным
          доходом и расходом пускается в инвестиции любой формы.
        </p>
        <p>
          Наверняка вы знакомы со многими людьми, которые весьма неплохо
          зарабатывают уже несколько лет и при этом едва сводят концы с концами.
          Они прекрасно делают то, чем занимаются — это может быть
          программирование, искусство, наука, спорт. Однако некоторые из них
          умудряются даже при этом залезать в долги. И ладно бы еще они покупали
          себе важные вещи, при помощи которых они развиваются. Как правило, эти
          товары совершенно бессмысленны и их покупка становится
          обременительной.
        </p>
        <p>
          Это может показаться странным, но по сути не имеет значения сколько вы
          зарабатываете на данный момент. В истории человечества есть тысячи
          историй о том, как совершенно нищий человек становился миллионером.
          Также есть и обратные истории — люди, которым на голову падало
          богатство, умудрялись потерять все за короткое время. Поэтому очень
          важно понимать, что ваш нынешний доход — не приговор. Именно затем и
          нужна финансовая грамотность. Она показывает, как путем приобретения
          некоторых финансовых привычек любой человек может вылезти из
          финансовой ямы и твердо встать на ноги.
        </p>
        <p>
          Экономика является сложным инструментом для понимания. Об этом говорят
          финансовые кризисы, когда даже самые лучшие экономисты мира не были
          способны предсказать теперь уже кажущиеся очевидными вещи. Теперь
          экономисты используют фразу о циклах, снимая с себя ответственность:
          «Существуют циклы, мировые кризисы будут всегда». Предсказать точную
          дату кризиса не может никто, однако подготовиться к ним может каждый.
        </p>
        <p>
          Может ли миллионер быть финансово неграмотным человеком? Может.
          Например, таковым является голливудский актер, который за одну роль
          может получить несколько миллионов долларов. Спустя какое-то время его
          слава проходит, а вместе с ним исчезает его финансовое состояние.
          Поэтому он вынужден остаток своей жизни играть низкооплачиваемые роли,
          распродавать свое имущество, чтобы сводить концы с концами. Это
          прекрасная иллюстрация важности финансовой грамотности.
        </p>
      </article>
    </div>
  )
}

export default IndexArticle
