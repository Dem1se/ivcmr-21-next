import * as React from 'react'
import Image from 'next/image'
import Modal from 'react-modal'
import styles from '../styles/SpeakerCard.module.css'

export default class SpeakerCard extends React.Component {
  constructor() {
    super()
    this.state = {
      ModalIsOpen: false,
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  modalStyle = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
      position: 'absolute',
      top: '15%',
      left: '30%',
      right: '30%',
      bottom: '15%',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '25px',
      outline: 'none',
      padding: '20px'
    }
  }

  handleOpenModal() {
    this.setState({ ModalIsOpen: true });
  }

  handleCloseModal() {
    this.setState({ ModalIsOpen: false });
  }

  render() {
    return (
      <>
        <div
          className={styles.card}
          onClick={this.handleOpenModal}
        >
          <div className={styles.imageBox}>
            <Image
              className={styles.image}
              layout='intrinsic'
              height='333'
              width='300'
              src={this.props.img}
              alt="Image of one of the speakers" />
          </div>
          <div className={styles.cardBase}>
            <h4 className={styles.name}>{this.props.name}</h4>
            <p className={styles.time}>{this.props.time}</p>
          </div>


        </div>
        <Modal
          isOpen={this.state.ModalIsOpen}
          style={this.modalStyle}
          contentLabel="Speak details modal"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
        >
          <div className={styles.modalTop}>
            <div className={styles.modalHead}>
              <p className={styles.modalName}>{this.props.fullName}</p>
              <p className={styles.modalOrg}>{this.props.org}</p>
              <div
                className={styles.icon}
                onClick={this.handleCloseModal}
              >
                <Image
                  src="/close-window-50.png"
                  alt=""
                  layout="fill"
                />
              </div>
            </div>
            <div className={styles.modalContent}>
              <div className={styles.modalSection}>
                <div className={styles.modalSectionTitle}>Presentation On</div>
                <div className={styles.modalSectionContent}>{this.props.topic}</div>
              </div>
              <div className={styles.modalSection}>
                <div className={styles.modalSectionTitle}>Timing</div>
                <div className={styles.modalSectionContent}>{this.props.timing}</div>
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}