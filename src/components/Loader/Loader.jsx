import { Box, Container, Stack } from '@mui/material'

import silverSpurLogo from '../../assets/img/silverspur.png'
import titansTeaLogo from '../../assets/img/titans-tea-logo.png'
import kulhadChaiLogo from '../../assets/img/kulhad-chai-logo.png'

import { motion, AnimatePresence } from "framer-motion"

// -------------------------------------------------------------------

const styles = {
  container: {
    width: '100%',
    height: '100vh',
    padding: '0 !important',
    background: '#f1f1f1'
  },
  logoTop: {
    position: 'absolute',
    top: '5rem',
    left: '50%'
  },
  logoRight: {
    position: 'absolute',
    top: '50%',
    right: '5rem'
  },
  logoLeft: {
    position: 'absolute',
    top: '50%',
    left: '5rem'
  },
  logoBottom: {
    position: 'absolute',
    bottom: '50%',
    left: '50%'
  }
}

const transitionIn = {
  ease: "easeInOut",
  duration: 0.5,
  delay: 2
}

// -------------------------------------------------------------------

const Loader = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div transition={{ delay: 3 }} exit={{ opacity: 0 }}>
          <Container maxWidth={'1920'} sx={[styles.container, {
            zIndex: '9999',
            position: 'absolute'
          }]}>
            <Stack className='transform -translate-x-1/2' sx={styles.logoTop}>
              <img className='w-96' src={silverSpurLogo} alt="Silver Spur Enterprises" />
            </Stack>
            <Stack className='transform -translate-y-1/2' sx={styles.logoRight}>
              <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} transition={transitionIn}><img className='w-48' src={titansTeaLogo} alt="Titans Tea Logo" /></motion.div>
            </Stack>
            <Stack className='transform -translate-y-1/2' sx={styles.logoLeft}>
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={transitionIn}><img className='w-96 h-48 object-contain' src={kulhadChaiLogo} alt="Kulhad Chai Logo" /></motion.div>
            </Stack>
            <Stack className='transform -translate-x-1/2' sx={styles.logoBottom}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transitionIn}><img className='w-96' src={silverSpurLogo} alt="Silver Spur Enterprises" /></motion.div>
            </Stack>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader