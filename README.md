# TODO

- ~~按钮刷新~~
- AD
- ~~图片版权~~
- ~~Chart 文字显示优化（小数点后，缩小字体，移动端不显示）~~
- ~~适配移动端（布局）~~
- 合并为一个Chart（颜色，）
- 名词解释
- 日内Chart
- 国际化
- 显示日期范围


```text

<Carousel autoplay dotPosition={"top"}>
  {
    Object.keys(BannerData).map((item, index) => {
        var data = BannerData[index];
        var key = index + 'key'
        return (
          <div key={key} onClick={() => {
            window.open(BannerData[index].url);
          }}>

            {/*<Paragraph style={contentStyle}>{data.text} : {data.title}</Paragraph>*/}
            <h2 style={contentStyle} >
              <a style={contentStyle} rel={"noreferrer"} href={data.url} target="_blank" title={data.desc}>{data.text} : {data.title}</a>
            </h2>
          </div>
        )
    })
  }
</Carousel>
```