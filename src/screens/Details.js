import React, { useState, useEffect } from 'react'

import {
  Card,
  Container,
  ErrorScreen,
  Loader,
  Paper,
  Table,
} from '../components'

import api from '../services/api'
import { strings } from '../config'

const Details = ({ route }) => {
  const { locationCode } = route.params

  const [diff, setDiff] = useState([])
  const [hasError, setHasError] = useState(true)
  const [isLoading, setLoading] = useState(true)
  const [status, setStatus] = useState([])

  useEffect(() => {
    fetchStatusData()
  }, [])

  useEffect(() => {
    fetchDiffData()
  }, [])

  const fetchStatusData = async () => {
    try {
      const response = await api.get(`/status/${locationCode}`)
      const { cases, deaths, recovered } = await response.data

      setStatus([
        {
          description: strings.dataDescription.totalCases,
          value: cases,
        },
        {
          description: strings.dataDescription.totalDeaths,
          value: deaths,
        },
        {
          description: strings.dataDescription.totalRecovered,
          value: recovered,
        },
      ])
    } catch (response) {}
  }

  const fetchDiffData = async () => {
    try {
      const response = await api.get(`/diff/${locationCode}`)
      const {
        new_cases,
        new_deaths,
        new_recovered,
        new_cases_percentage,
        new_deaths_percentage,
        new_recovered_percentage,
      } = await response.data

      setDiff([
        {
          description: strings.dataDescription.newCases,
          value: new_cases,
          percentage: new_cases_percentage,
        },
        {
          description: strings.dataDescription.newDeaths,
          value: new_deaths,
          percentage: new_deaths_percentage,
        },
        {
          description: strings.dataDescription.newRecovered,
          value: new_recovered,
          percentage: new_recovered_percentage,
        },
      ])
      setHasError(false)
      setLoading(false)
    } catch (response) {
      setLoading(false)
    }
  }

  if (isLoading) return <Loader />
  if (hasError) return <ErrorScreen />

  return (
    <Container>
      <Paper>
        <Card data={status} />
      </Paper>

      <Table data={diff} />
    </Container>
  )
}

export default Details
