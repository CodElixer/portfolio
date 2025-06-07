"use client"

import { useRef, useEffect, useState } from "react"
import { useTheme } from "next-themes"
import * as THREE from "three"

export default function GeometryBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!containerRef.current || !isMounted) return

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 20

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Set background color based on theme
    const isDarkTheme = theme === "dark"

    // Create geometry objects
    interface GeometryObject {
      mesh: THREE.Mesh;
      rotationSpeed: { x: number; y: number; z: number };
      movementSpeed: { x: number; y: number; z: number };
    }
    const geometries: GeometryObject[] = []
    const totalObjects = 50

    for (let i = 0; i < totalObjects; i++) {
      // Randomly choose geometry type
      let geometry
      const geometryType = Math.floor(Math.random() * 4)

      switch (geometryType) {
        case 0:
          // Tetrahedron
          geometry = new THREE.TetrahedronGeometry(Math.random() * 1 + 0.5, 0)
          break
        case 1:
          // Octahedron
          geometry = new THREE.OctahedronGeometry(Math.random() * 1 + 0.5, 0)
          break
        case 2:
          // Icosahedron
          geometry = new THREE.IcosahedronGeometry(Math.random() * 1 + 0.5, 0)
          break
        default:
          // Dodecahedron
          geometry = new THREE.DodecahedronGeometry(Math.random() * 1 + 0.5, 0)
      }

      // Create material
      const material = new THREE.MeshBasicMaterial({
        color: isDarkTheme
          ? new THREE.Color(`hsl(${Math.random() * 60 + 250}, 70%, 60%)`)
          : new THREE.Color(`hsl(${Math.random() * 60 + 250}, 70%, 50%)`),
        wireframe: true,
        transparent: true,
        opacity: 0.5,
      })

      // Create mesh
      const mesh = new THREE.Mesh(geometry, material)

      // Position randomly in 3D space
      mesh.position.x = (Math.random() - 0.5) * 40
      mesh.position.y = (Math.random() - 0.5) * 40
      mesh.position.z = (Math.random() - 0.5) * 30

      // Random rotation
      mesh.rotation.x = Math.random() * Math.PI
      mesh.rotation.y = Math.random() * Math.PI

      // Random scale
      const scale = Math.random() * 0.5 + 0.5
      mesh.scale.set(scale, scale, scale)

      // Add to scene and store reference
      scene.add(mesh)
      geometries.push({
        mesh,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01,
        },
        movementSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.01,
        },
      })
    }

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Update each geometry
      geometries.forEach((item) => {
        // Rotate
        item.mesh.rotation.x += item.rotationSpeed.x
        item.mesh.rotation.y += item.rotationSpeed.y
        item.mesh.rotation.z += item.rotationSpeed.z

        // Move
        item.mesh.position.x += item.movementSpeed.x
        item.mesh.position.y += item.movementSpeed.y
        item.mesh.position.z += item.movementSpeed.z

        // Boundary check and reverse direction if needed
        if (Math.abs(item.mesh.position.x) > 25) {
          item.movementSpeed.x *= -1
        }
        if (Math.abs(item.mesh.position.y) > 25) {
          item.movementSpeed.y *= -1
        }
        if (Math.abs(item.mesh.position.z) > 15) {
          item.movementSpeed.z *= -1
        }
      })

      // Slowly rotate camera
      camera.position.x = Math.sin(Date.now() * 0.0001) * 2
      camera.position.y = Math.cos(Date.now() * 0.0001) * 2
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }

      // Dispose geometries and materials
      geometries.forEach((item) => {
        item.mesh.geometry.dispose()
        ;(item.mesh.material as THREE.Material).dispose()
        scene.remove(item.mesh)
      })

      renderer.dispose()
    }
  }, [theme, isMounted])

  if (!isMounted) {
    return <div className="w-full h-full bg-background" />
  }

  return <div ref={containerRef} className="absolute inset-0" />
}
