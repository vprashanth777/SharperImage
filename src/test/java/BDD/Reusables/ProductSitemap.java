package BDD.Reusables;


import java.io.File;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
 
/**
 * @author Crunchify.com
 * 
 */
 
public class ProductSitemap {
	private static final int MYTHREADS = 30;
 
	public static void main(String args[]) throws Exception {
		ExecutorService executor = Executors.newFixedThreadPool(MYTHREADS);
		
		xmlRead XML=new xmlRead();
		for (String s:XML.readxml("https://www.sharperimage.com/si/productSitemap.xml")) {
 
		
			Runnable worker = new MyRunnable(s);
			executor.execute(worker);
		}
		executor.shutdown();
		// Wait until all threads are finish
		while (!executor.isTerminated()) {
 
		}
		System.out.println("\nFinished all threads");
	}
 
	public static class MyRunnable implements Runnable {
		private final String url;
 
		MyRunnable(String url) {
			this.url = url;
		}
 
		@Override
		public void run() {
 
			String result = "";
			int code = 200;
			PrintWriter writer = null;

		    try {
		     
				
				Document doc = Jsoup.connect(url).get();
				
				if(doc.select("ul.pdp-info-actions").size()<=0)
				{
					result="->Not Avilable<-\t";
				}
			} catch (Exception e) {
				result = "->Broken<-\t";
			}
		    
		    finally{
		    	if(result.length()>0)
				{
					System.out.println(url+"  "+result);
				}
		       
		    } 
		    
			
		}
	}
}