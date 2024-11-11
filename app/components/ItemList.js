'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ItemList = ({ items }) => {
  const [selectedId, setSelectedId] = useState(null)
  const selectedItem = items.find(item => item.id === selectedId)

  return (
    <>
      {items.map(item => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          onClick={() => setSelectedId(item.id)}
          className="cursor-pointer p-4 w-[250px] h-[300px] bg-gray-200 rounded-lg shadow-lg m-4"
        >
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          >
            <motion.div className="bg-white rounded-lg p-8">
              <motion.h5>{selectedItem.subtitle}</motion.h5>
              <motion.h2>{selectedItem.title}</motion.h2>
              <motion.button
                onClick={() => setSelectedId(null)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ItemList