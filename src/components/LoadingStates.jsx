import { cn } from '../utils/cn'

// Modern skeleton loader component
export function Skeleton({ className, variant = 'default' }) {
  const variants = {
    default: 'h-4 w-full',
    text: 'h-4 w-full',
    title: 'h-8 w-3/4',
    avatar: 'h-12 w-12 rounded-full',
    button: 'h-10 w-20 rounded-lg',
    card: 'h-32 w-full rounded-lg',
    circle: 'h-16 w-16 rounded-full',
    rectangle: 'h-24 w-full rounded-lg'
  }

  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-muted',
        variants[variant],
        className
      )}
    >
      <div className="h-full w-full bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent animate-shimmer" />
    </div>
  )
}

// Modern card skeleton
export function CardSkeleton() {
  return (
    <div className="glass-morphism rounded-xl p-6 space-y-4">
      <div className="flex items-center space-x-4">
        <Skeleton variant="avatar" />
        <div className="flex-1 space-y-2">
          <Skeleton variant="title" />
          <Skeleton variant="text" className="w-1/2" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton variant="text" />
        <Skeleton variant="text" className="w-4/5" />
      </div>
      <div className="flex space-x-2">
        <Skeleton variant="button" />
        <Skeleton variant="button" className="w-16" />
      </div>
    </div>
  )
}

// Modern project card skeleton
export function ProjectCardSkeleton() {
  return (
    <div className="glass-card rounded-xl overflow-hidden card-hover-3d">
      <div className="h-48 bg-gradient-to-br from-teal-400/20 to-purple-400/20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <Skeleton variant="title" className="text-white mb-2" />
          <div className="flex space-x-2">
            <Skeleton variant="button" className="w-16 h-6" />
            <Skeleton variant="button" className="w-16 h-6" />
          </div>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <Skeleton variant="text" />
          <Skeleton variant="text" className="w-4/5" />
        </div>
        <div className="flex flex-wrap gap-2">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} variant="button" className="w-12 h-6" />
          ))}
        </div>
      </div>
    </div>
  )
}

// Modern skill card skeleton
export function SkillCardSkeleton() {
  return (
    <div className="glass-morphism rounded-xl p-6 text-center">
      <div className="w-16 h-16 mx-auto mb-4">
        <Skeleton variant="circle" />
      </div>
      <Skeleton variant="title" className="mx-auto w-20" />
      <div className="mt-4 space-y-2">
        <div className="w-full bg-muted rounded-full h-2">
          <div className="h-2 bg-gradient-to-r from-teal-500 to-purple-600 rounded-full w-3/4 animate-pulse" />
        </div>
      </div>
    </div>
  )
}

// Modern certificate card skeleton
export function CertificateCardSkeleton() {
  return (
    <div className="glass-card rounded-xl overflow-hidden card-hover">
      <div className="aspect-video bg-gradient-to-br from-teal-400/20 to-purple-400/20 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20">
            <Skeleton variant="circle" />
          </div>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <Skeleton variant="title" />
        <Skeleton variant="text" className="w-3/4" />
        <div className="flex justify-between items-center">
          <Skeleton variant="button" className="w-16 h-6" />
          <Skeleton variant="button" className="w-12 h-6" />
        </div>
      </div>
    </div>
  )
}

// Modern timeline skeleton
export function TimelineSkeleton() {
  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-purple-600" />
      {[...Array(3)].map((_, i) => (
        <div key={i} className="relative flex items-start space-x-6 mb-8">
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-full glass-morphism flex items-center justify-center">
              <Skeleton variant="circle" />
            </div>
          </div>
          <div className="flex-1 space-y-3">
            <Skeleton variant="title" />
            <Skeleton variant="text" className="w-1/2" />
            <div className="space-y-2">
              <Skeleton variant="text" />
              <Skeleton variant="text" className="w-4/5" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Modern loading spinner
export function LoadingSpinner({ size = 'md', className }) {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  }

  return (
    <div className={cn('relative', sizes[size], className)}>
      <div className={cn(
        'absolute inset-0 rounded-full border-2 border-muted-foreground/20',
        'border-t-teal-500 animate-spin'
      )} />
      <div className={cn(
        'absolute inset-1 rounded-full border-2 border-transparent',
        'border-t-purple-500 animate-spin',
        'animation-delay-150'
      )} />
    </div>
  )
}

// Modern page loader
export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-8">
        {/* Logo animation */}
        <div className="relative mx-auto w-20 h-20">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-teal-500 to-purple-600 animate-pulse-glow" />
          <div className="absolute inset-0 rounded-lg glass-morphism flex items-center justify-center">
            <div className="w-8 h-8">
              <LoadingSpinner size="sm" />
            </div>
          </div>
        </div>
        
        {/* Loading text */}
        <div className="space-y-2">
          <div className="text-lg font-medium gradient-text animate-pulse">Loading Portfolio</div>
          <div className="flex justify-center space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-purple-600 animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-64 mx-auto">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-teal-500 to-purple-600 rounded-full animate-progress" />
          </div>
        </div>
      </div>
    </div>
  )
}

// Modern inline loader
export function InlineLoader({ text = 'Loading...' }) {
  return (
    <div className="flex items-center space-x-3 text-muted-foreground">
      <LoadingSpinner size="sm" />
      <span className="text-sm">{text}</span>
    </div>
  )
}

// Modern button loader
export function ButtonLoader({ loading, children, className }) {
  return (
    <button
      disabled={loading}
      className={cn(
        'relative px-4 py-2 rounded-lg font-medium transition-all duration-200',
        'bg-gradient-to-r from-teal-500 to-purple-600 text-white',
        'hover:scale-105 disabled:scale-100 disabled:opacity-50',
        className
      )}
    >
      <div className="flex items-center justify-center space-x-2">
        {loading && <LoadingSpinner size="sm" />}
        <span className={loading ? 'opacity-0' : 'opacity-100'}>
          {children}
        </span>
      </div>
    </button>
  )
}
