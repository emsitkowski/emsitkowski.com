<template>
  <ElementProcessGraphContainer>
    <!-- Discover -->
    <ElementProcessGraphWrapper>
      <ElementProcessGraphLine />
      <ElementProcessGraphRectangle />
      <ElementProcessGraphCircle width-percentage="80" />
      <ElementProcessGraphLabel label="Discovery" />
    </ElementProcessGraphWrapper>

    <!-- Define -->
    <ElementProcessGraphWrapper>
      <ElementProcessGraphLine />
      <ElementProcessGraphCircle width-percentage="150" />
      <ElementProcessGraphLabel label="Definition" />
    </ElementProcessGraphWrapper>

    <!-- Develop -->
    <ElementProcessGraphWrapper>
      <ElementProcessGraphLine />
      <ElementProcessGraphCircle width-percentage="180" />
      <ElementProcessGraphLabel label="Development" />
    </ElementProcessGraphWrapper>

    <!-- Deliver -->
    <ElementProcessGraphWrapper>
      <ElementProcessGraphLine />
      <ElementProcessGraphRectangle />
      <ElementProcessGraphCircle width-percentage="60" />
      <ElementProcessGraphLabel label="Delivery" />
    </ElementProcessGraphWrapper>
  </ElementProcessGraphContainer>
</template>
