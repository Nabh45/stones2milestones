import React from 'react';


class AboutVueJs extends React.Component {
    componentWillMount() {
        console.log(sessionStorage);
    }

    handleClick() {
        sessionStorage.name = 'nabhdeep';
        console.log(sessionStorage);
    }
    render() {
        return (
            <div className='aboutVueOuter'>
                <h1>Welcome to Your Vue.js App</h1>
                <h2>Essential Links</h2>
                <ul className='aboutVueUl'>
                    <li><a href="https://vuejs.org/" target='_blank'>Core Docs</a></li>
                    <li><a href="https://forum.vuejs.org/" target='_blank'>Forum</a></li>
                    <li><a href="https://discordapp.com/invite/HBherRA" target='_blank'>Community Chat</a></li>
                    <li><a href="https://twitter.com/vuejs" target='_blank'>Twitter</a></li>
                    <br/>
                    <li><a href="http://vuejs-templates.github.io/webpack/" target='_blank'>Docs For This Template</a></li>
                </ul>

            <div className='ecosystem'>
                <h2>Ecosystem</h2>
                </div>

                <ul className='aboutVueUl'>
                <li><a href="https://router.vuejs.org/" target='_blank'>vue-router</a></li>
                <li><a href="https://vuex.vuejs.org/" target='_blank'>vuex</a></li>
                <li><a href="https://vue-loader.vuejs.org/" target='_blank'>vue-loader</a></li>
                <li><a href="https://github.com/vuejs/awesome-vue" target='_blank'>awesome-vue</a></li>
                    </ul>

            </div>
        )
    }
}

export default AboutVueJs;