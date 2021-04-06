import React, { FC } from "react"
import styles from "./Hero.scss"
import { ReactComponent as Vector } from "./Hero.svg"
import { Col, Container, Row } from "../../Layout"
import { Button } from "../../Elements/Button"

export interface HeroProps {
  heading: string
  seoHeading: string
  subheading?: string
}

const HeroVector = () => {
  if (Vector) {
    return <Vector />
  }

  return null
}

export const Hero: FC<HeroProps> = ({ heading, seoHeading, subheading }) => {
  return (
    <div className={styles["rd-hero"]}>
      <Container>
        <Row>
          <Col flex={60}>
            <div className={styles["rd-hero__content-wrapper"]}>
              <h1 className={styles["rd-hero__seo-heading"]}>{seoHeading}</h1>
              <p className={styles["rd-hero__heading"]}>{heading}</p>
              <p className={styles["rd-hero__subheading"]}>{subheading}</p>
              <Button text="Start a Project" />
            </div>
          </Col>

          <Col flex={40}>
            <div className={styles["rd-hero__image-wrapper"]}>
              <HeroVector />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
