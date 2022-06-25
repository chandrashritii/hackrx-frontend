import React, { useState } from 'react'
import { DictaphoneWidgetA, DictaphoneWidgetB } from './Dictaphone'
import SpeechRecognition from './SpeechRecognition'
import { FaMicrophone } from "react-icons/fa";

export default () => {
  const [showFirstWidget, setShowFirstWidget] = useState(true)
  const toggleShowFirstWidget = () => setShowFirstWidget(!showFirstWidget)

  const listenContinuously = () => SpeechRecognition.startListening({
    continuous: true,
    language: 'en-GB'
  })
  const listenContinuouslyInChinese = () => SpeechRecognition.startListening({
    continuous: true,
    language: 'zh-CN'
  })
  const listenOnce = () => SpeechRecognition.startListening({ continuous: false })

  return (
    <div>
      {/* {showFirstWidget && <DictaphoneWidgetA />} */}
      <DictaphoneWidgetB />
      {/* <button onClick={listenOnce}>Listen once</button> */}
      <button onClick={listenOnce}><FaMicrophone /></button>
      {/* <button onClick={listenContinuouslyInChinese}>Listen continuously (Chinese)</button> */}

      <button onClick={SpeechRecognition.stopListening}>Stop</button>
    </div>
  )
}
