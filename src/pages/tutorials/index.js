import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Layout from '../../layouts/Default'
import tutorials from '../../tutorials.json'
import styles from './Tutorials.css'

export default class Tutorials extends Component {
  renderTutorials = () => {
    return tutorials.map((tut, i) => {
      return (
        <a key={i} className={styles.link} href={tut.url} target='_blank' rel='noopener noreferrer'>
          <span>{tut.title}</span>
          <span className={styles.date}>
            {tut.date}
          </span>
        </a>
      )
    })
  }
  render() {
    return (
      <Layout>
        <div className="about-container" style={{ padding: 30 }}>
          <Helmet title={`Tutorials`} />
          <h2>
            Function Tutorials
          </h2>
          {this.renderTutorials()}
        </div>
      </Layout>
    )
  }
}
