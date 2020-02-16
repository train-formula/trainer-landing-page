import React, { useState } from 'react'
import styled from 'styled-components'
import { GiBullseye } from 'react-icons/gi'
import { GoCalendar, GoPerson } from 'react-icons/go'
import { MdPhoneIphone } from 'react-icons/md'
import { IoMdCheckmark } from 'react-icons/io'

import Layout from 'components/layout'
import { useModal } from 'components/modal'

const Container = styled.div`
  display: grid;
  grid-gap: 6rem;
`
const ProgramOverview = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  height: 40rem;
  .image {
  }
  .information {
    display: grid;
    padding: 3rem 0;
    color: black;
    &-name {
      font-size: 5rem;
      text-transform: uppercase;
      font-weight: 700;
    }
    &-description {
      font-size: 2rem;
      font-weight: 300;
      letter-spacing: 0.1rem;
      line-height: 1.2;
    }
    &-cta {
      border: 0.25rem solid black;
      padding: 1rem 3rem;
      width: fit-content;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      font-size: 2rem;
      font-weight: 600;
      cursor: pointer;
      background: black;
      color: white;
      transition: all 0.15s ease;
      &:hover {
        background: white;
        color: black;
      }
    }
  }
`
const ProgramDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  height: min-content;
  .detail {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-gap: 2rem;
    justify-items: center;
    text-align: center;
    &-header {
      display: grid;
      grid-gap: 1rem;
      justify-items: center;
      font-size: 2.2rem;
      text-transform: uppercase;
      font-weight: 700;
    }
    &-description {
      display: grid;
      grid-gap: 1rem;
      height: min-content;
      letter-spacing: 0.05rem;
      font-size: 1.8rem;
    }
  }
`
const BullseyeIcon = styled(GiBullseye)`
  height: 6rem;
  width: 6rem;
`
const CalendarIcon = styled(GoCalendar)`
  height: 6rem;
  width: 6rem;
`
const PersonIcon = styled(MdPhoneIphone)`
  height: 6rem;
  width: 6rem;
`
const AppDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  height: 40rem;
  .features {
    border: 1px solid black;
    display: grid;
    grid-gap: 2rem;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    &-header {
      display: grid;
      align-self: end;
      font-size: 4rem;
      font-weight: 600;
    }
    &-features-list {
      display: grid;
      grid-gap: 1rem;
      align-self: start;
      font-size: 1.8rem;
      font-weight: 500;
      &-item {
        margin-left: 1rem;
      }
    }
  }
  .app-picture {
    border: 1px solid black;
  }
`
const PurchaseSection = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  justify-content: center;
  padding: 8rem 0;
  .message {
    font-size: 3.5rem;
    font-weight: 700;
    text-transform: uppercase;
  }
  .cta {
    border: 0.25rem solid black;
    cursor: pointer;
    width: fit-content;
    margin: 0 auto;
    padding: 1rem 2rem;
    text-align: center;
    font-size 2rem;
    text-transform: uppercase;
    background: black;
    color: white;
    transition: all 0.15s ease;
    font-weight: 600;
    &:hover {
      background: white;
      color: black;
    }
  }
`

export default function Programs(props) {
  const [test, setState] = useModal()
  console.log('test:', test)
  const [open, setOpen] = useState(false)

  function handleClickOpen() {
    console.log('click')
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <Layout>
      <Container>
        <ProgramOverview>
          <div className="image" />
          <div className="information">
            <div className="information-name">chest pump</div>
            <div className="information-description">
              Lorem ipsum dolor amet thundercats twee sriracha biodiesel, put a
              bird on it taiyaki air plant activated charcoal irony narwhal
              ethical iPhone fashion axe mustache drinking vinegar. Kombucha
              ramps banh mi twee synth sartorial keytar enamel pin. Irony
              authentic meh lyft tofu.
            </div>
            <div className="information-cta" onClick={handleClickOpen}>
              start training
            </div>
          </div>
        </ProgramOverview>
        <ProgramDetails>
          <div className="detail">
            <div className="detail-header">
              <CalendarIcon />
              <div className="detail-header-title">commitment</div>
            </div>
            <ul className="detail-description">
              <li>6 week program</li>
              <li>train 3x a week</li>
              <li>60 minute workouts</li>
            </ul>
          </div>
          <div className="detail">
            <div className="detail-header">
              <PersonIcon />
              <div className="detail-header-title">users</div>
            </div>
            <div className="detail-description">
              <div>intermediate users</div>
              <div>advanced users</div>
            </div>
          </div>
          <div className="detail">
            <div className="detail-header">
              <BullseyeIcon />
              <div className="detail-header-title">goals</div>
            </div>
            <div className="detail-description">
              <div>burn fat</div>
              <div>increase strength</div>
              <div>build endurance</div>
              <div>improve physique</div>
            </div>
          </div>
        </ProgramDetails>
        <AppDetails>
          <div className="features">
            <div className="features-header">about the app</div>
            <div className="features-features-list">
              <div>
                <IoMdCheckmark />
                <span className="features-features-list-item">
                  track performance
                </span>
              </div>
              <div>
                <IoMdCheckmark />
                <span className="features-features-list-item">lorem ipsum</span>
              </div>
              <div>
                <IoMdCheckmark />
                <span className="features-features-list-item">lorem ipsum</span>
              </div>
              <div>
                <IoMdCheckmark />
                <span className="features-features-list-item">lorem ipsum</span>
              </div>
              <div>
                <IoMdCheckmark />
                <span className="features-features-list-item">
                  available for iPhone and Android
                </span>
              </div>
            </div>
          </div>
          <div className="app-picture">
            <img
              src="https://agalp.imedadel.me/static/a86d27f88b0ebfe3558a7099ce1131f7/30b98/black.png"
              alt="iphone shell"
            />
          </div>
        </AppDetails>
        <PurchaseSection>
          <div className="message">get in the best shape of your life</div>
          <div className="cta">start your program</div>
        </PurchaseSection>
      </Container>
    </Layout>
  )
}
